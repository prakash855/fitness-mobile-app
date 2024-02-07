import { CircularProgress } from "../CircularProgress";
import steps from "../../assets/images/steps.svg";

export const Steps = () => {
  return (
    <div style={{ width: 178, height: 178, top: "-7rem" }} className="relative">
      <div>
        <img src={steps} alt="Steps" className="w-full" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-32 h-32">
            <CircularProgress radius={16} strokeWidth={3} progress={70} />
            <div
              style={{ top: "3rem" }}
              className="text-white absolute left-11"
            >
              <b>5233</b>
              <div className="text-xs">Steps</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
