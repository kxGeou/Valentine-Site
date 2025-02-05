import React, { useState } from "react";
import "./App.css";

const ValentineCard: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [noPosition, setNoPosition] = useState({ top: "50%", left: "50%" });

  const moveNoButton = (event: React.MouseEvent) => {
    const button = event.currentTarget as HTMLButtonElement;
    const parent = button.parentElement as HTMLElement;
    
    const maxX = parent.clientWidth - button.clientWidth;
    const maxY = parent.clientHeight - button.clientHeight;
    
    let newX = Math.random() * maxX;
    let newY = Math.random() * maxY;
    
    setNoPosition({ top: `${newY}px`, left: `${newX}px` });
  };

  return (
    <div className="container">
      {!accepted ? (
        <div className={`card ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(true)}>
          {!isOpen ? (
            <p className="click-text">Kliknij, aby otworzyć</p>
          ) : (
            <div className="content">
              <h2>Czy zostaniesz moją walentynką?</h2>
              <div className="buttons" style={{ position: "relative", width: "100%", height: "100px" }}>
                <button className="yes" onClick={() => setAccepted(true)}>Tak</button>
                <button
                  className="no"
                  style={{ top: noPosition.top, left: noPosition.left, position: "absolute" }}
                  onMouseEnter={moveNoButton}
                >
                  Nie
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="result">
          <img src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif" alt="Dancing Cat!" />
          <h2>Yippie!</h2>
        </div>
      )}
    </div>
  );
};

export default ValentineCard;
