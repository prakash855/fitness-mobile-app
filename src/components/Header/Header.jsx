import styles from "./Header.module.css";

import user from "../../assets/images/user.svg";
import backBtn from "../../assets/images/back-btn.svg";
import { Button } from "../Button/Button";

export const Header = () => {
  return (
    <div style={{ padding: "1.9rem 1rem" }}>
      <div className="flex justify-between pb-2">
        <div
          style={{ width: "60px", height: "60px" }}
          className={`p-4 rounded-full flex justify-center items-center ${styles.backBtn}`}
        >
          <img src={backBtn} alt="" />
        </div>
        <img src={user} alt="" />
      </div>
      <div style={{ fontSize: "2rem", fontWeight: "700" }}>Your</div>
      <div style={{ fontSize: "2rem", fontWeight: "700" }}>Fitness Tracker</div>
      <div className="flex">
        <Button name="Connected Device" background="#ff6020" color="#ffff" />
        <Button name="Statistics" background="#f2f2f2" color="#a9a9a9" />
      </div>
    </div>
  );
};
