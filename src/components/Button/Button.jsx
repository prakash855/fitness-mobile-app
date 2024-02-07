import styles from "./Button.module.css";

export const Button = ({ name, color, background, width, height }) => (
  <div
    style={{ background, color, width, height, textAlign: "center" }}
    className={styles.btn}
  >
    {name}
  </div>
);
