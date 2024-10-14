import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const inputRef = useRef();
  const navigate = useNavigate();

  const startGame = () => {
    const playerName = inputRef.current.value;
    if (playerName) {
      navigate("/game", { state: { name: playerName } });
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Bienvenido al Juego de Adivina el Número</h1>
      <input type="text" ref={inputRef} placeholder="Ingresa tu nombre" />
      <button onClick={startGame}>Comenzar Juego</button>
    </div>
  );
};

export default Home;
