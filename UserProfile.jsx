import React, { useState, useEffect } from "react";

function UserProfile() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [healthInfo, setHealthInfo] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("userProfile");
    if (saved) {
      const data = JSON.parse(saved);
      setName(data.name);
      setAge(data.age);
      setGender(data.gender);
      setHealthInfo(data.healthInfo);
    }
  }, []);

  const saveProfile = () => {
    localStorage.setItem("userProfile", JSON.stringify({ name, age, gender, healthInfo }));
    alert("Profile saved!");
  };

  return (
    <div>
      <h2>User Profile</h2>
      <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
      <input placeholder="Age" value={age} onChange={e => setAge(e.target.value)} />
      <select value={gender} onChange={e => setGender(e.target.value)}>
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
      <textarea placeholder="Health Info" value={healthInfo} onChange={e => setHealthInfo(e.target.value)} />
      <button onClick={saveProfile}>Save Profile</button>
    </div>
  );
}

export default UserProfile;