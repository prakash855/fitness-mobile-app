import styles from "./Button.module.css";

export const Button = ({ name, color, background }) => (
  <div style={{ background, color }} className={styles.btn}>
    {name}
  </div>
);
