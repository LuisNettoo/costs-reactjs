import ProjectForm from "../project/ProjectForm";
import styles from "./Newproject.module.css";

const Newproject = () => {
  return (
    <div className={styles.newproject_container}>
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <ProjectForm btnText="Criar Projeto" />
    </div>
  );
};

export default Newproject;
