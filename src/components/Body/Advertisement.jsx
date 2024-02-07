import watch from "../../assets/images/watch.svg";
import { Button } from "../Button/Button";

const Layer = ({ top, width, background, children }) => (
  <div
    className="absolute left-1/2 transform -translate-x-1/2 rounded-lg"
    style={{
      top,
      width,
      background,
      height: 280,
    }}
  >
    {children}
  </div>
);

export const Advertisement = () => (
  <div style={{ position: "relative", width: "100%", height: "45%" }}>
    <Layer top={0} background="#fff3d8" width="85%" />
    <Layer top={15} background="#ffbfa6" width="90%" />
    <Layer top={30} background="#2f2f2f" width="98%">
      <div className="flex justify-between">
        <div className="content pl-6 pt-6 flex flex-col justify-between">
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
          <img src={watch} alt="" className="w-full lg:w-auto" />
        </div>
      </div>
    </Layer>
  </div>
);
