import React from "react";
import "./Button.css";

const Button = ({ image, description, onClick }) => {
  return (
    <div className="button-container">
      <button className="interactive-button" onClick={onClick}>
        <img src={image} alt={description} className="button-image" />
      </button>
      <div className="tooltip">{description}</div>
    </div>
  );
};

export default Button;
