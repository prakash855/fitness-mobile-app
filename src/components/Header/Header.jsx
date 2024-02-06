import styles from "./Header.module.css";

import user from "../../assets/images/user.svg";
import backBtn from "../../assets/images/back-btn.svg";
import { Button } from "../Button/Button";

export const Header = () => {
  return (
    <>
      <div className="flex justify-between">
        <div
          style={{ width: "60px", height: "60px" }}
          className={`p-4 rounded-full flex justify-center items-center ${styles.backBtn}`}
        >
          <img src={backBtn} alt="" />
        </div>
        <img src={user} alt="" />
      </div>
      <div style={{ fontSize: "2.5rem", fontWeight: "600" }}>Your</div>
      <div style={{ fontSize: "2.5rem", fontWeight: "600" }}>
        Fitness Tracker
      </div>
      <Button />
    </>
  );
};
