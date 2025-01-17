import React, { useState } from "react";
import UploadZone from "./UploadZone";
import ResultCard from "./ResultCard";

const App = () => {
  const [frontImage, setFrontImage] = useState(null);
  const [backImage, setBackImage] = useState(null);
  const [results, setResults] = useState(null);

  const calculateGrade = () => {
    // Placeholder for centering detection and grading logic
    const score = Math.floor(Math.random() * 1000) + 1; // Random score for now
    const grade = score >= 950 ? 10 : Math.floor(score / 100);
    const feedback = "Centering was slightly off on the back.";

    setResults({ score, grade, feedback });
  };

  return (
    <div className="app">
      <h1>PokéGrade</h1>
      {!results ? (
        <div className="upload-container">
          <UploadZone label="Front Image" onUpload={setFrontImage} />
          <UploadZone label="Back Image" onUpload={setBackImage} />
          <button onClick={calculateGrade} disabled={!frontImage || !backImage}>
            Submit for Grading
          </button>
        </div>
      ) : (
        <ResultCard {...results} />
      )}
    </div>
  );
};

export default App;
