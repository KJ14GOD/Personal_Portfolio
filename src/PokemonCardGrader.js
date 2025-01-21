import React, { useState, useRef } from "react";
import "./PokemonCardGrader.css";

const PokemonCardGrader = () => {
  const [frontImage, setFrontImage] = useState(null);
  const [backImage, setBackImage] = useState(null);
  const [frontScore, setFrontScore] = useState(null);
  const [backScore, setBackScore] = useState(null);
  const [isGraded, setIsGraded] = useState(false); // New state to handle navigation
  const canvasRef = useRef(null);

  const handleImageUpload = (e, side) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (side === "front") {
          setFrontImage(reader.result);
        } else {
          setBackImage(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const calculateEdges = (imageSrc) => {
    return new Promise((resolve) => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      const image = new Image();
      image.src = imageSrc;
      image.onload = () => {
        canvas.width = image.width;
        canvas.height = image.height;
        ctx.drawImage(image, 0, 0);

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const { data, width, height } = imageData;

        let leftEdge = width,
          rightEdge = 0,
          topEdge = height,
          bottomEdge = 0;

        for (let y = 0; y < height; y++) {
          for (let x = 0; x < width; x++) {
            const index = (y * width + x) * 4;
            const alpha = data[index + 3];

            if (alpha > 0) {
              leftEdge = Math.min(leftEdge, x);
              rightEdge = Math.max(rightEdge, x);
              topEdge = Math.min(topEdge, y);
              bottomEdge = Math.max(bottomEdge, y);
            }
          }
        }

        const horizontalDiff = Math.abs(leftEdge - (width - rightEdge));
        const verticalDiff = Math.abs(topEdge - (height - bottomEdge));

        resolve({ horizontalDiff, verticalDiff });
      };
    });
  };

  const gradeImage = async (side) => {
    const imageSrc = side === "front" ? frontImage : backImage;
    if (!imageSrc) return;

    const { horizontalDiff, verticalDiff } = await calculateEdges(imageSrc);

    const maxDiff = 50;
    const horizontalScore = Math.max(0, 10 - (horizontalDiff / maxDiff) * 10);
    const verticalScore = Math.max(0, 10 - (verticalDiff / maxDiff) * 10);

    const totalScore = ((horizontalScore + verticalScore) / 20) * 10;

    if (side === "front") {
      setFrontScore(totalScore.toFixed(2));
    } else {
      setBackScore(totalScore.toFixed(2));
    }
  };

  const handleGrade = async () => {
    if (frontImage) await gradeImage("front");
    if (backImage) await gradeImage("back");
    setIsGraded(true); // Navigate to the results page
  };

  const handleBackToGrading = () => {
    setIsGraded(false);
    setFrontScore(null);
    setBackScore(null);
  };

  return (
    <div className="grader-container">
      {!isGraded ? (
        <div className="pixel-border">
          <div className="content-wrapper">
            <div className="header">
              <h1 className="retro-text">Pokémon Card Grader</h1>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleGrade();
              }}
              className="grader-form"
            >
              <div className="upload-grid">
                <div className="upload-section">
                  <label className="retro-label">Front of Card</label>
                  <label htmlFor="front-upload" className="upload-box">
                    {frontImage ? (
                      <img
                        src={frontImage}
                        alt="Front of card"
                        className="preview-image"
                      />
                    ) : (
                      <>
                        <div className="pokeball-icon"></div>
                        <span>Upload front view</span>
                      </>
                    )}
                  </label>
                  <input
                    type="file"
                    id="front-upload"
                    onChange={(e) => handleImageUpload(e, "front")}
                    accept="image/*"
                  />
                </div>

                <div className="upload-section">
                  <label className="retro-label">Back of Card</label>
                  <label htmlFor="back-upload" className="upload-box">
                    {backImage ? (
                      <img
                        src={backImage}
                        alt="Back of card"
                        className="preview-image"
                      />
                    ) : (
                      <>
                        <div className="pokeball-icon"></div>
                        <span>Upload back view</span>
                      </>
                    )}
                  </label>
                  <input
                    type="file"
                    id="back-upload"
                    onChange={(e) => handleImageUpload(e, "back")}
                    accept="image/*"
                  />
                </div>
              </div>

              <button type="submit" className="submit-button">
                Grade Cards
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div className="result-screen">
          <div className="digital-holder">
            <div className="score">
              Front Score: {Math.round(frontScore)}/10
            </div>
            <img src={frontImage} alt="Front of card" className="graded-image" />
          </div>
          <div className="digital-holder">
            <div className="score">
              Back Score: {Math.round(backScore)}/10
            </div>
            <img src={backImage} alt="Back of card" className="graded-image" />
          </div>
          <button className="submit-button" onClick={handleBackToGrading}>
            Back to Grading
          </button>
        </div>
      )}

      <canvas ref={canvasRef} style={{ display: "none" }}></canvas>
    </div>
  );
};

export default PokemonCardGrader;
