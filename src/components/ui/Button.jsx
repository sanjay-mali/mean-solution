import React from "react";
import "./Button.Style.css";

const Button = ({ text }) => {
  return (
    <button>
      <div className="text">
        <span>{text}</span>
      </div>
      <div className="clone">
        <span>{text}</span>
      </div>
    </button>
  );
};

export default Button;
