import React, { useState, useEffect } from "react";

function PrakritiAnalysis() {
  const [result, setResult] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("prakritiResult");
    if (saved) setResult(JSON.parse(saved).type);
  }, []);

  const calculatePrakriti = () => {
    const types = ["Vata", "Pitta", "Kapha"];
    const chosen = types[Math.floor(Math.random() * 3)];
    setResult(chosen);
    localStorage.setItem("prakritiResult", JSON.stringify({ type: chosen }));
  };

  return (
    <div>
      <h2>Prakriti Analysis</h2>
      <button onClick={calculatePrakriti}>Analyze Prakriti</button>
      {result && <p>Your Prakriti type: <b>{result}</b></p>}
    </div>
  );
}

export default PrakritiAnalysis;