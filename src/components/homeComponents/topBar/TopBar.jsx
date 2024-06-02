import "./TopBar.css";

export const TopBar = () => {
  return (
    <div className="d-flex justify-content-between bg-black text-white">
      <div className="d-flex gap-3 ps-1">
        <div>Help Centre</div>
        <div>Track My Order</div>
        <div>rebel Active</div>
        <div>rebel gift cards</div>
      </div>
      <div>
        <div>Free delivery Over $150*</div>
      </div>
      <div className="slantedbox">Login Or Register</div>
    </div>
  );
};
