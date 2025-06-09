// Loading environment variables from .env
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Redirecting the user to Spotify for login
app.get('/login', (req, res) => {
    const scope = 'playlist-modify-public playlist-modify-private';
    const authUrl = 'https://accounts.spotify.com/authorize?' +
        new URLSearchParams({
            response_type: 'code',
            client_id: process.env.SPOTIFY_CLIENT_ID,
            scope: scope,
            redirect_uri: process.env.SPOTIFY_REDIRECT_URI,
        });
    res.redirect(authUrl);
});

// Handling callback from Spotify and returning access token to frontend
app.get('/callback', async (req, res) => {
    const code = req.query.code;

    try {
        const response = await axios.post('https://accounts.spotify.com/api/token',
            new URLSearchParams({
                grant_type: 'authorization_code',
                code: code,
                redirect_uri: process.env.SPOTIFY_REDIRECT_URI,
                client_id: process.env.SPOTIFY_CLIENT_ID,
                client_secret: process.env.SPOTIFY_CLIENT_SECRET
            }),
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });

        const { access_token, refresh_token } = response.data;

        res.redirect(`${process.env.CLIENT_URL}/?access_token=${access_token}&refresh_token=${refresh_token}`);
    } catch (error) {
        console.error('Token exchange error:', error.response.data);
        res.status(400).send('Error exchanging token');
    }
});

// Creating a playlist and adding tracks
app.post('/create-playlist', async (req, res) => {
    const { accessToken, userId, name, description, uris } = req.body;

    try {
        // Creating the playlist
        const playlistRes = await axios.post(
            `https://api.spotify.com/v1/users/${userId}/playlists`,
            {
                name: name,
                description: description,
                public: false
            },
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'Content-Type': 'application/json'
                }
            }
        );

        const playlistId = playlistRes.data.id;

        // Adding tracks to the playlist
        await axios.post(
            `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
            { uris },
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'Content-Type': 'application/json'
                }
            }
        );

        res.status(200).json({ success: true, playlistId });
    } catch (error) {
        console.error('Error creating playlist:', error.response.data);
        res.status(500).json({ error: 'Failed to create playlist' });
    }
});

// Starting the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
