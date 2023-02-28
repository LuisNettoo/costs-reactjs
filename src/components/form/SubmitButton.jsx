import React from "react";

import styles from "./SubmitButton.module.css";

const SubmitButton = ({ text }) => {
  return (
    <div className={styles.btn}>
      <button type="submit">{text}</button>
    </div>
  );
};

export default SubmitButton;
