import React, { useEffect, useState } from "react";
import axios from "axios";

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/projects").then((res) => setProjects(res.data));
  }, []);

  const acceptProject = (id) => {
    axios.post(`http://localhost:5000/api/projects/${id}/accept`).then(() => {
      alert("Project Accepted!");
    });
  };

  return (
    <div>
      <h2>Project Assignment</h2>
      <ul>
        {projects.map((project) => (
          <li key={project._id}>
            {project.name} - {project.status}
            {project.status === "assigned" && (
              <button onClick={() => acceptProject(project._id)}>Accept</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
