import React, { useState, useRef } from "react";
import "./PokemonCardGrader.css";

const PokemonCardGrader = () => {
  const [frontImage, setFrontImage] = useState(null);
  const [backImage, setBackImage] = useState(null);
  const [frontScore, setFrontScore] = useState(null);
  const [backScore, setBackScore] = useState(null);
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
        // Set canvas size to match the image
        canvas.width = image.width;
        canvas.height = image.height;

        // Draw the image on the canvas
        ctx.drawImage(image, 0, 0);

        // Get pixel data
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const { data, width, height } = imageData;

        // Analyze edges
        let leftEdge = width,
          rightEdge = 0,
          topEdge = height,
          bottomEdge = 0;

        for (let y = 0; y < height; y++) {
          for (let x = 0; x < width; x++) {
            const index = (y * width + x) * 4; // RGBA channels
            const alpha = data[index + 3]; // Check alpha channel for presence of content

            if (alpha > 0) {
              // Update edges
              leftEdge = Math.min(leftEdge, x);
              rightEdge = Math.max(rightEdge, x);
              topEdge = Math.min(topEdge, y);
              bottomEdge = Math.max(bottomEdge, y);
            }
          }
        }

        const horizontalDiff = Math.abs(leftEdge - (width - rightEdge));
        const verticalDiff = Math.abs(topEdge - (height - bottomEdge));

        // Return the differences
        resolve({ horizontalDiff, verticalDiff });
      };
    });
  };

  const gradeImage = async (side) => {
    const imageSrc = side === "front" ? frontImage : backImage;
    if (!imageSrc) return;

    const { horizontalDiff, verticalDiff } = await calculateEdges(imageSrc);

    // Calculate score: Lower difference = higher score
    const maxDiff = 50; // Adjust this based on how strict the grading is
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
  };

  return (
    <div className="grader-container">
      <div className="pixel-border">
        <div className="content-wrapper">
          {/* Retro Header */}
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
              {/* Front of Card */}
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

              {/* Back of Card */}
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

          {frontScore && (
            <div className="grade-display">
              <h3>Front Centering Score: {frontScore}/10</h3>
            </div>
          )}
          {backScore && (
            <div className="grade-display">
              <h3>Back Centering Score: {backScore}/10</h3>
            </div>
          )}

          {/* Hidden Canvas for Image Processing */}
          <canvas ref={canvasRef} style={{ display: "none" }}></canvas>
        </div>
      </div>
    </div>
  );
};

export default PokemonCardGrader;
