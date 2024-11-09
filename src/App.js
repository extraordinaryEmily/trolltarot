import React, { useEffect, useState } from "react";
import "./App.css";
import Button from "./Button"; // Import button component
import logo from "./assets/title.png"
import b1 from "./assets/Button1.png"
import b2 from "./assets/Button2.png"
import b3 from "./assets/Button3.png"
import b4 from "./assets/Button4.png"
import b5 from "./assets/Button5.png"

const App = () => {
  const [showLogo, setShowLogo] = useState(true);
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    // Fade out logo after a delay
    const timer = setTimeout(() => {
      setShowLogo(false);
      setShowButtons(true);
    }, 3000); // Adjust time as needed
    return () => clearTimeout(timer);
  }, []);

  const handleButtonClick = (buttonId) => {
    console.log(`Button ${buttonId} clicked`);
    // You can handle different actions based on buttonId
    setShowButtons(false); // Hide buttons when one is clicked
  };

  const buttonData = [
    {
      id: 1,
      image: b1,
      description: "Linear 3; simple cause to effect, sequential fortune.",
      onClick: () => handleButtonClick(1),
    },
    {
      id: 2,
      image: b2,
      description: "Balanced 3; equally weighted options and comparison.",
      onClick: () => handleButtonClick(2),
    },
    {
      id: 3,
      image: b3,
      description: "Foundation 3; stepping stones for a bigger picture.",
      onClick: () => handleButtonClick(3),
    },
    {
      id: 4,
      image: b4,
      description: "Heart Shaker; feeling guarded or reserved when it comes to love?",
      onClick: () => handleButtonClick(4),
    },
    {
      id: 5,
      image: b5,
      description: "A New Year; forecast a year's worth of wisdom",
      onClick: () => handleButtonClick(5),
    },
  ];

  return (
    <div className="app">
      {showLogo && <img src={logo} alt="Logo" className="logo" />}
      {showButtons && (
        <div className="content">
          <h1>Which reading would you like?</h1>
          <div className="button-row">
            {buttonData.map((button) => (
              <Button
                key={button.id}
                image={button.image}
                description={button.description}
                onClick={button.onClick}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
