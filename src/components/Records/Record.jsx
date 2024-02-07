import { FitenessData } from "../FitenessData";
import { Steps } from "./Steps";

export const Record = () => {
  return (
    <div className="flex justify-between">
      <Steps />
      <div
        style={{ width: 178, height: 178, top: "-7rem" }}
        className="relative flex flex-col justify-evenly"
      >
        <FitenessData name="Calories" quantity="1200 KCal" />
        <FitenessData name="Water" quantity="1.8 Ltrs" />
      </div>
    </div>
  );
};
