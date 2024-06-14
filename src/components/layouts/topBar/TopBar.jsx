import { useNavigate } from "react-router-dom";
import "./TopBar.css";

export const TopBar = () => {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate("/signin");
  };
  return (
    <div className="md-6 d-flex justify-content-between bg-black text-white">
      <div className="d-flex gap-3 ps-1">
        <div onClick={() => navigate("/helpcenter")} className="pointer">
          Help Centre
        </div>
        <div>Track My Order</div>
        <div>rebel Active</div>
        <div>rebel gift cards</div>
      </div>
      <div>
        <div>Free delivery Over $150*</div>
      </div>
      <div className="slantedbox" onClick={handleOnClick}>
        Login Or Register
      </div>
    </div>
  );
};
