import React from "react";
import "./PokemonTCGWeb.css"; // Styling for the page
import pikachuPack from "./pikachupack.png";
import mewtwoPack from "./mewtwopack.png";
import charizardPack from "./chaizardpack.png";

const PokemonTCGWeb = () => {
  return (
    <div className="app-container">
      {/* Header Section */}
      <div className="header">
        <div className="user-info">
          <div className="user-level">
            <img
              src="https://via.placeholder.com/50" // Placeholder for user avatar
              alt="User Avatar"
              className="user-avatar"
            />
            <p>Lv. 28</p>
          </div>
        </div>
        <div className="header-icons">
          <button className="icon-btn">📩</button>
          <button className="icon-btn">🎁</button>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="packs-container">
          <div className="pack">
            <img src={pikachuPack} alt="Pikachu Pack" className="pack-image" />
            <p className="pack-timer">08 hr 03 min</p>
          </div>
          <div className="pack">
            <img src={mewtwoPack} alt="Mewtwo Pack" className="pack-image" />
            <p className="pack-timer">08 hr 03 min</p>
          </div>
          <div className="pack">
            <img
              src={charizardPack}
              alt="Charizard Pack"
              className="pack-image"
            />
            <p className="pack-timer">08 hr 03 min</p>
          </div>
        </div>

        {/* Buttons Section */}
        <div className="actions-container">
          <div className="action-button">
            <p>Wander Pick</p>
            <span className="timer">09 hr 08 min</span>
          </div>
          <div className="action-button">Shop</div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="footer">
        <button className="footer-btn">🏠</button>
        <button className="footer-btn">📖</button>
        <button className="footer-btn">👥</button>
        <button className="footer-btn">🛠</button>
      </div>
    </div>
  );
};

export default PokemonTCGWeb;
