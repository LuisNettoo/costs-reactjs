import React from "react";

import savings from "../assets/images/savings.svg";
import "./Home.scss";

const Home = () => {
  return (
    <section className="home__container">
      <h1>
        Bem-vindo ao <span>Costs</span>
      </h1>
      <p>Comece a gerenciar seus projetos agora mesmo!</p>
      <a href="/">Criar Projeto</a>
      <img src={savings} alt="" />
    </section>
  );
};

export default Home;
