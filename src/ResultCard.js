import React from "react";

const ResultCard = ({ score, grade, feedback }) => {
  return (
    <div className="result-card">
      <h2>Grading Results</h2>
      <p>Score: {score} / 1000</p>
      <p>Grade: {grade} / 10</p>
      <p>Feedback: {feedback}</p>
    </div>
  );
};

export default ResultCard;
