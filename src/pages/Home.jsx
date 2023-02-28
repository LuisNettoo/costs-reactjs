import React from "react";

import savings from "../assets/images/savings.svg";
import LinkButton from "../layout/LinkButton";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <section className={styles.home_container}>
      <h1>
        Bem-vindo ao <span>Costs</span>
      </h1>
      <p>Comece a gerenciar seus projetos agora mesmo!</p>
      <LinkButton to="/newproject" text="Criar Projetos" />
      <img src={savings} alt="" />
    </section>
  );
};

export default Home;
