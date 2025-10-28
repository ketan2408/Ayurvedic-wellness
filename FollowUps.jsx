import React, { useState, useEffect } from "react";

function FollowUps() {
  const [followUps, setFollowUps] = useState([]);
  const [task, setTask] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("followUps");
    if (saved) setFollowUps(JSON.parse(saved));
  }, []);

  const addFollowUp = () => {
    const newFollowUps = [...followUps, { date: new Date().toLocaleDateString(), task }];
    setFollowUps(newFollowUps);
    localStorage.setItem("followUps", JSON.stringify(newFollowUps));
    setTask("");
  };

  return (
    <div>
      <h2>Follow-ups</h2>
      <input placeholder="New Task" value={task} onChange={e => setTask(e.target.value)} />
      <button onClick={addFollowUp}>Add Follow-up</button>
      <ul>{followUps.map((f, i) => <li key={i}>{f.date}: {f.task}</li>)}</ul>
    </div>
  );
}

export default FollowUps;