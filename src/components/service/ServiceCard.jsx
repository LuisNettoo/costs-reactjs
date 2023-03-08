import { BsFillTrashFill } from "react-icons/bs";

import styles from "../project/ProjectCard.module.css";

const ServiceCard = ({ id, name, cost, description, handleRemove }) => {
  const remove = (e) => {
    return;
  };

  return (
    <div className={styles.project_card}>
      <h4>{name}</h4>
      <p>
        <span>Custo do Serviço:</span> R${cost}
      </p>
      <p>
        <span>Descrição:</span> {description}
      </p>
      <div className={styles.project_card_card_actions}>
        <button onClick={remove}>
          <BsFillTrashFill /> Remover
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
