import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Game = () => {
  const { state } = useLocation();
  const playerName = state?.name || "Jugador";
  const [guess, setGuess] = useState("");
  const [randomNumber, setRandomNumber] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [attempts, setAttempts] = useState(0);

  useEffect(() => {
    setRandomNumber(Math.floor(Math.random() * 100) + 1);
  }, []);

  const handleGuess = () => {
    setAttempts(prev => prev + 1);
    const guessNumber = Number(guess);
    if (guessNumber === randomNumber) {
      setFeedback(`¡Correcto! El número era ${randomNumber}`);
    } else {
      setFeedback(guessNumber < randomNumber ? "Muy bajo" : "Muy alto");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Hola, {playerName}</h1>
      <div
        style={{
          width: "200px",
          height: "200px",
          margin: "20px auto",
          fontSize: "100px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "2px solid black",
        }}
      >
        {feedback.includes("¡Correcto!") ? randomNumber : "?"}
      </div>
      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        placeholder="Ingresa tu número"
      />
      <button onClick={handleGuess}>Adivinar</button>
      <p>{feedback}</p>
      <p>Intentos: {attempts}</p>
    </div>
  );
};

export default Game;
