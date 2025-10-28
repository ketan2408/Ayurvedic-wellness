import React, { useState } from "react";
import UserProfile from "./components/UserProfile";
import PrakritiAnalysis from "./components/PrakritiAnalysis";
import DietChart from "./components/DietChart";
import DailySchedule from "./components/DailySchedule";
import FollowUps from "./components/FollowUps";

function App() {
  const [page, setPage] = useState("UserProfile");

  return (
    <>
      <nav className="navbar">
        <a href="#" onClick={() => setPage("UserProfile")}>User Profile</a>
        <a href="#" onClick={() => setPage("PrakritiAnalysis")}>Prakriti Analysis</a>
        <a href="#" onClick={() => setPage("DietChart")}>Diet Chart</a>
        <a href="#" onClick={() => setPage("DailySchedule")}>Daily Schedule</a>
        <a href="#" onClick={() => setPage("FollowUps")}>Follow-ups</a>
      </nav>
      <div className="container">
        {page === "UserProfile" && <UserProfile />}
        {page === "PrakritiAnalysis" && <PrakritiAnalysis />}
        {page === "DietChart" && <DietChart />}
        {page === "DailySchedule" && <DailySchedule />}
        {page === "FollowUps" && <FollowUps />}
      </div>
    </>
  );
}

export default App;