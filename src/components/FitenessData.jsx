export const FitenessData = ({ name, quantity }) => {
  return (
    <div className="secondaryBgColor py-3 px-12 rounded-[41px] flex flex-col justify-center">
      <div className="mainColor">{name}</div>
      <div className="font-bold">{quantity}</div>
    </div>
  );
};
