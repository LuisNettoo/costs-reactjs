import React from "react";
import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";

import styles from "./ProjectForm.module.css";

const ProjectForm = ({ btnText }) => {
  return (
    <form className={styles.form} autoComplete="off">
      <Input
        type="text"
        text="Insira o nome do projeto"
        placeholder="Insira o nome do projeto"
        name="name"
      />
      <Input
        type="number"
        text="Orçamento do projeto"
        placeholder="Insira o orçamento total"
        name="budget"
      />
      <Select name="category_id" text="Selecione a categoria" />
      <SubmitButton text={btnText} />
    </form>
  );
};

export default ProjectForm;
