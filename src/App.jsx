import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("#03010fff"); // couleur de fond par défaut

  const changeColor = () => {
    const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    setColor(randomColor);
  };

  return (
    <div style={{
      backgroundColor: color,
      height: "100vh",
      width: "100vw",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <button 
        onClick={changeColor} 
        style={{
          padding: "15px 25px",
          fontSize: "18px",
          cursor: "pointer",
          border: "none",
          borderRadius: "8px"
        }}
      >
        Change Color
      </button>
    </div>
  );
}

export default App;
