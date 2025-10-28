import React, { useState, useEffect } from "react";

function DailySchedule() {
  const [schedule, setSchedule] = useState({ wakeUp: "", meditation: "", exercise: "" });

  useEffect(() => {
    const saved = localStorage.getItem("dailySchedule");
    if (saved) setSchedule(JSON.parse(saved));
  }, []);

  const saveSchedule = () => {
    localStorage.setItem("dailySchedule", JSON.stringify(schedule));
    alert("Schedule saved!");
  };

  return (
    <div>
      <h2>Daily Schedule</h2>
      <input placeholder="Wake-up Time" value={schedule.wakeUp} onChange={e => setSchedule({...schedule, wakeUp: e.target.value})} />
      <input placeholder="Meditation Duration" value={schedule.meditation} onChange={e => setSchedule({...schedule, meditation: e.target.value})} />
      <input placeholder="Exercise Duration" value={schedule.exercise} onChange={e => setSchedule({...schedule, exercise: e.target.value})} />
      <button onClick={saveSchedule}>Save Schedule</button>
    </div>
  );
}

export default DailySchedule;