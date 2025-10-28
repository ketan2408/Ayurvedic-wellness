import React, { useEffect, useState } from "react";

function DietChart() {
  const [prakriti, setPrakriti] = useState("");
  const [diet, setDiet] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("prakritiResult");
    if (saved) setPrakriti(JSON.parse(saved).type);
  }, []);

  useEffect(() => {
    if (prakriti === "Vata") setDiet(["Warm foods", "Milk", "Rice"]);
    else if (prakriti === "Pitta") setDiet(["Cooling foods", "Fruits", "Vegetables"]);
    else if (prakriti === "Kapha") setDiet(["Light foods", "Spices", "Legumes"]);
    else setDiet([]);
  }, [prakriti]);

  return (
    <div>
      <h2>Diet Chart</h2>
      {prakriti ? (
        <ul>{diet.map((item, i) => <li key={i}>{item}</li>)}</ul>
      ) : (
        <p>Please analyze your Prakriti first.</p>
      )}
    </div>
  );
}

export default DietChart;