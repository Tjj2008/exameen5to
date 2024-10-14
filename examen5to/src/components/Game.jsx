import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Feedback from "./Feedback";

const Game = () => {
  const location = useLocation();
  const playerName = location.state?.name || "Jugador";
  const [guess, setGuess] = useState("");
  const [randomNumber, setRandomNumber] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [attempts, setAttempts] = useState(0);

  useEffect(() => {
    const number = Math.floor(Math.random() * 100) + 1;
    setRandomNumber(number);
  }, []);

  const handleGuess = () => {
    const guessNumber = parseInt(guess);
    setAttempts(attempts + 1);

    if (guessNumber < randomNumber) {
      setFeedback("Muy bajo");
    } else if (guessNumber > randomNumber) {
      setFeedback("Muy alto");
    } else {
      setFeedback("¡Correcto! El número es " + randomNumber);
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
        {feedback === "¡Correcto!" ? randomNumber : "?"}
      </div>
      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        placeholder="Ingresa tu número"
      />
      <button onClick={handleGuess}>Adivinar</button>
      <Feedback feedback={feedback} />
      <p>Intentos: {attempts}</p>
    </div>
  );
};

export default Game;
