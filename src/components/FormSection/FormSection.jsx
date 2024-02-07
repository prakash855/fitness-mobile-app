import { Button } from "../Button/Button";
import { Input } from "../Input";

export const FormSection = () => {
  return (
    <div
      style={{ borderRadius: "30px 30px 0 0" }}
      className="bg-orange-500 m-2 p-2"
    >
      <b className="text-white p-4 text-xl">Add Details</b>
      <Input placeholder="Name" />
      <Input placeholder="Age" />
      <Input placeholder="Height" />
      <Input value="Are you agym member?" />
      <Input value="Do you eat meat?" />
      <Input value="Are you cyclist?" />
      <div className="mt-4 mb-9">
        <Button
          name="Save Details"
          background="#2f2f2f"
          color="white"
          width="100%"
        />
      </div>
    </div>
  );
};
