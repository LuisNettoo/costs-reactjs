import loading from "../../assets/images/loading.svg";
import styles from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={styles.loader_container}>
      <img src={loading} alt="spinner" className={styles.loader} />
    </div>
  );
};

export default Loading;
