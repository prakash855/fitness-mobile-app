export const FitenessData = ({ name, quantity }) => {
  return (
    <div className="secondaryBgColor py-2 px-12 rounded-[30px] flex flex-col justify-center">
      <div className="mainColor">{name}</div>
      <div className="font-bold">{quantity}</div>
    </div>
  );
};
