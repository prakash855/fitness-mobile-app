import arrowDown from "../assets/images/arrowDown.svg";

export const Input = ({ placeholder, value }) => (
  <div className="flex items-center">
    <input
      type="text"
      className="input px-6"
      placeholder={placeholder}
      value={value}
      disabled={value}
      style={{ background: "white", fontSize: "14px" }}
    />
    {!placeholder && (
      <div style={{ position: "relative", right: "2rem", top: "7px" }}>
        <img src={arrowDown} alt="" />
      </div>
    )}
  </div>
);
