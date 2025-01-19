import React, { useState } from 'react';
import './PokemonCardGrader.css';

const PokemonCardGrader = () => {
  const [frontImage, setFrontImage] = useState(null);
  const [backImage, setBackImage] = useState(null);
  const [grade, setGrade] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleImageUpload = (e, side) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (side === 'front') {
          setFrontImage(reader.result);
        } else {
          setBackImage(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const generateRandomGrade = () => {
    setIsLoading(true);
    setTimeout(() => {
      const grades = [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10];
      const randomGrade = grades[Math.floor(Math.random() * grades.length)];
      setGrade(randomGrade);
      setIsLoading(false);
    }, 1500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (frontImage && backImage) {
      generateRandomGrade();
    }
  };

  return (
    <div className="grader-container">
      <div className="pixel-border">
        <div className="content-wrapper">
          {/* Retro Header with Pikachu Ears */}
          <div className="header">
            <div className="pikachu-ears">
              <div className="ear left"></div>
              <div className="ear right"></div>
            </div>
            <h1 className="retro-text">Pokémon Card Grader</h1>
            <div className="pixel-dots"></div>
          </div>

          <form onSubmit={handleSubmit} className="grader-form">
          <div className="upload-grid">
  {/* Front of Card */}
  <div className="upload-section">
    <label className="retro-label">Front of Card</label>
    <label htmlFor="front-upload" className="upload-box">
      {frontImage ? (
        <img src={frontImage} alt="Front of card" className="preview-image" />
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
      onChange={(e) => handleImageUpload(e, 'front')}
      accept="image/*"
    />
    <label htmlFor="front-upload" className="file-input-label">Choose File</label>
  </div>

  {/* Back of Card */}
  <div className="upload-section">
    <label className="retro-label">Back of Card</label>
    <label htmlFor="back-upload" className="upload-box">
      {backImage ? (
        <img src={backImage} alt="Back of card" className="preview-image" />
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
      onChange={(e) => handleImageUpload(e, 'back')}
      accept="image/*"
    />
    <label htmlFor="back-upload" className="file-input-label">Choose File</label>
  </div>
</div>


            <button
              type="submit"
              disabled={!frontImage || !backImage || isLoading}
              className="submit-button"
            >
              {isLoading ? (
                <div className="loading">
                  <div className="pokeball-loading"></div>
                  <span>Analyzing...</span>
                </div>
              ) : (
                <span>Get Grade Estimate</span>
              )}
            </button>

            {grade && (
              <div className="grade-display">
                <div className="pixel-frame">
                  <h3 className="grade-title">PSA Grade</h3>
                  <div className="grade-value">
                    <div className="pixel-number">{grade}</div>
                  </div>
                  <div className="pixel-stars">
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                  </div>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default PokemonCardGrader;