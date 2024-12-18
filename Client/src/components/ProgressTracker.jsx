import React, { useState } from "react";
import axios from "axios";

const ProgressTracker = () => {
  const [progress, setProgress] = useState(0);

  const updateProgress = () => {
    axios
      .patch("http://localhost:5000/api/progress/user123", {
        projectId: "projectId123",
        progress,
      })
      .then((res) => {
        alert(`Progress Updated! Score: ${res.data.score}`);
      });
  };

  return (
    <div>
      <h2>Progress Tracker</h2>
      <input
        type="number"
        placeholder="Progress (%)"
        value={progress}
        onChange={(e) => setProgress(Number(e.target.value))}
      />
      <button onClick={updateProgress}>Update Progress</button>
    </div>
  );
};

export default ProgressTracker;
