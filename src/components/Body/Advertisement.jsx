import watch from "../../assets/images/watch.svg";
import { Button } from "../Button/Button";

export const Advertisement = () => (
  <div style={{ position: "relative", width: "100%", height: "100%" }}>
    <div
      style={{
        position: "absolute",
        top: 0,
        left: "50%",
        transform: "translateX(-50%)",
        width: "85%",
        height: 280,
        borderRadius: "15px",
        background: "#fff3d8",
      }}
    ></div>
    <div
      style={{
        position: "absolute",
        top: 15,
        left: "50%",
        transform: "translateX(-50%)",
        width: "90%",
        height: 280,
        borderRadius: "15px",
        background: "#ffbfa6",
      }}
    ></div>
    <div
      style={{
        position: "absolute",
        top: 30,
        left: "50%",
        transform: "translateX(-50%)",
        width: "98%",
        height: 280,
        borderRadius: "15px",
        background: "#2f2f2f",
      }}
    >
      <div className="flex justify-between">
        <div className="content pl-6 py-4 flex flex-col justify-between">
          <div>
            <b className="mainColor">Smart Watch</b>
            <div style={{ fontSize: "1.8rem" }} className="text-white">
              Fire Boltt
            </div>
          </div>
          <div className="text-white text-xs">
            Scan to the device QR to connect
          </div>
          <Button name="Scan" color="white" background="#FF601F" />
        </div>
        <div className="relative">
          <img src={watch} alt="" className="w-full" />
        </div>
      </div>
    </div>
  </div>
);
