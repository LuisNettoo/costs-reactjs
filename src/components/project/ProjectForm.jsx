import React from "react";
import { useState, useEffect } from "react";

import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";

import styles from "./ProjectForm.module.css";

const ProjectForm = ({ handleSubmit, btnText, projectData }) => {
  const [categories, setCategories] = useState([]);
  const [project, setProject] = useState(projectData || {});

  useEffect(() => {
    fetch("http://localhost:5000/categories", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const submit = (e) => {
    e.preventDefault();
    handleSubmit(project);
  };

  const handleChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  const handleCategory = (e) => {
    setProject({
      ...project,
      category: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
    });
    console.log(project);
  };

  return (
    <form className={styles.form} onSubmit={submit} autoComplete="off">
      <Input
        type="text"
        text="Insira o nome do projeto"
        placeholder="Insira o nome do projeto"
        name="name"
        value={project.name ? project.name : ""}
        handleOnChange={handleChange}
      />
      <Input
        type="number"
        text="Orçamento do projeto"
        placeholder="Insira o orçamento total"
        name="budget"
        value={project.budget ? project.budget : ""}
        handleOnChange={handleChange}
      />
      <Select
        name="category_id"
        text="Selecione a categoria"
        options={categories}
        handleOnChange={handleCategory}
        value={project.category ? project.category.id : ""}
      />
      <SubmitButton text={btnText} />
    </form>
  );
};

export default ProjectForm;
