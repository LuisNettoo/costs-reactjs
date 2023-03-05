import styles from "./Project.module.css";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Project = () => {
  const { id } = useParams();

  const [project, setProject] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/projects/${id}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProject(data);
      });
  }, [id]);

  return (
    <div>
      Projetos <span>{project.name}</span>
    </div>
  );
};

export default Project;
