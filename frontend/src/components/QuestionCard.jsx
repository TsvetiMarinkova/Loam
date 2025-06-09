import React from "react";
import { questions } from "./questions";

const QuestionCard = ({ question, onAnswer }) => {
  const question = questions[question.id];

  if (!question) return <p>No questions found.</p>;

  // Need to style this after I finish functionalities
  return (
    <div className="question-card">
      <h2>{question.text}</h2>
      <div className="space-y-2">
        {question.options.map((option) => (
          <button
            key={option.value}
            className="option-button"
            onClick={() => onAnswer(option)}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
