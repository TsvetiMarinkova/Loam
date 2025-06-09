
// An object array with all the questions, answers and scores for the quiz
export const questions = [
    {
        id: 'q1',
        text: 'What time of day is your favourite?',
        options: [
            {
                label: 'Dawn',
                value: 'dawn',
                vibeImpact: { energetic: 2, calm: 1, adventerous: 1 }
            },
            {
                label: 'Late Morning',
                value: 'late_morning',
                vibeImpact: { upbeat: 2, cozy: 2 }
            },
            {
                label: 'Golden Hour',
                value: 'golden_hour',
                vibeImpact: { cozy: 2, moody: 1, calm: 1 }
            },
            {
                label: 'Midnight',
                value: 'midnight',
                vibeImpact: { moody: 2, cozy: 1, adventerous: 1 }
            }
        ]
    },
    {
        id: 'q2',
        text: 'How are you feeling today?',
        options: [
            {
                label: 'Wiped out',
                value: 'wiped_out',
                vibeImpact: { moody: 2, cozy: 1, calm: 1 }
            },
            {
                label: 'Stable and Grounded',
                value: 'stable_grounded',
                vibeImpact: { calm: 2, cozy: 2 }
            },
            {
                label: 'Chaotacally Productive',
                value: 'chaotically_productive',
                vibeImpact: { energetic: 2, upbeat: 2 }
            },
            {
                label: 'High Energy',
                value: 'high_energy',
                vibeImpact: { upbeat: 2, energetic: 1, adventerous: 1 }
            }
        ]
    },
    {
        id: 'q3',
        text: 'Choose a colour palette:',
        options: [
            {
                label: 'Pastels',
                value: 'pastels',
                vibeImpact: { cozy: 2, calm: 2 }
            },
            {
                label: 'Earthy Tones',
                value: 'earthy_tones',
                vibeImpact: { calm: 2, cozy: 1, moody: 1 }
            },
            {
                label: 'Neon Brights',
                value: 'neon_brights',
                vibeImpact: { energetic: 2, upbeat: 1, adventerous: 1 }
            },
            {
                label: 'Jewel Tones',
                value: 'jewel_tones',
                vibeImpact: { moody: 2, calm: 1, upbeat: 1 }
            }
        ]
    },
    {
        id: 'q4',
        text: 'What is your favourite weather?',
        options: [
            {
                label: 'Sunny and Warm',
                value: 'sunny_warm',
                vibeImpact: { upbeat: 2, energetic: 1, adventerous: 1 }
            },
            {
                label: 'Thunderstorms',
                value: 'thunderstorms',
                vibeImpact: { moody: 2, cozy: 1, calm: 1 }
            },
            {
                label: 'Snowy and Cold',
                value: 'snowy_cold',
                vibeImpact: { calm: 2, cozy: 2 }
            },
            {
                label: 'Overcast and Windy',
                value: 'overcast_windy',
                vibeImpact: { moody: 2, cozy: 1, adventerous: 1 }
            }
        ]
    },
    {
        id: 'q5',
        text: 'Choose a hobby:',
        options: [
            {
                label: 'Gaming',
                value: 'gaming',
                vibeImpact: { energetic: 2, upbeat: 1, adventerous: 1 }
            },
            {
                label: 'Painting',
                value: 'painting',
                vibeImpact: { moody: 2, cozy: 1, calm: 1 }
            },
            {
                label: 'Fibre Arts',
                value: 'fibre_arts',
                vibeImpact: { calm: 2, cozy: 2 }
            },
            {
                label: 'Sports',
                value: 'sports',
                vibeImpact: { upbeat: 2, energetic: 2 }
            }
        ]
    },
    {
        id: 'q6',
        text: 'Choose an item:',
        options: [
            {
                label: 'Disposable Camera',
                value: 'disposable_camera',
                vibeImpact: { moody: 2, cozy: 1, calm: 1 }
            },
            {
                label: 'Neon Sign',
                value: 'neon_sign',
                vibeImpact: { upbeat: 2, energetic: 1, adventerous: 1 }
            },
            {
                label: 'Handheld Mirror',
                value: 'handheld_mirror',
                vibeImpact: { moody: 2, calm: 2 }
            },
            {
                label: 'Record Player',
                value: 'record_player',
                vibeImpact: { adventerous: 2, cozy: 1, upbeat: 1 }
            }
        ]
    },
    {
        id: 'q7',
        text: 'Which fictional character resonates with you most?',
        options: [
            {
                label: 'Luna (Sailor Moon)',
                value: 'luna_sailor_moon',
                vibeImpact: { moody: 2, calm: 1, cozy: 1 }
            },
            {
                label: 'Wednesday Addams',
                value: 'wednesday_addams',
                vibeImpact: { moody: 3, cozy: 1 }
            },
            {
                label: 'Flick (Animal Crossing)',
                value: 'flick_animal_crossing',
                vibeImpact: { adventerous: 2, energetic: 2 }
            },
            {
                label: 'SpongeBob SquarePants',
                value: 'spongebob_squarepants',
                vibeImpact: { upbeat: 2, energetic: 2 }
            }
        ]
    },
    {
        id: 'q8',
        text: 'What do you want out of this playlist?',
        options: [
            {
                label: 'Get ready for a night out',
                value: 'get_ready_night_out',
                vibeImpact: { upbeat: 2, energetic: 1, adventerous: 1 }
            },
            {
                label: 'Background music for work/studying',
                value: 'background_music_work',
                vibeImpact: { calm: 2, cozy: 2 }
            },
            {
                label: 'Road trip vibes',
                value: 'road_trip_vibes',
                vibeImpact: { adventerous: 2, upbeat: 1, energetic: 1 }
            },
            {
                label: 'Discover new music',
                value: 'discover_new_music',
                vibeImpact: { adventerous: 4 }
            }
        ]
    },
]