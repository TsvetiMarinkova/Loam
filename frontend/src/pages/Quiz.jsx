import React, { useState } from "react";
import QuestionCard from "../components/QuestionCard";
import { questions } from "../components/questions";

const Quiz = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [vibeScores, setVibeScores] = useState({
    energetic: 0,
    calm: 0,
    cozy: 0,
    moody: 0,
    upbeat: 0,
    adventerous: 0,
  });

  const handleAnswer = (option) => {
    const updatedScores = { ...vibeScores };
    for (const [vibe, score] of Object.entries(option.vibeImpact)) {
      updatedScores[vibe] = (updatedScores[vibe] || 0) + score;
    }

    setAnswers([...answers, option.value]);
    setVibeScores(updatedScores);

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // Final results here, need to link to spotify and show the playlist
      console.log("Final Vibe Scores:", updatedScores);
    }
  };

  return (
    <div>
      <QuestionCard
        question={questions[currentIndex]}
        onAnswer={handleAnswer}
      />
    </div>
  );
};

export default Quiz;
