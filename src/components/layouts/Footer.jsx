import { Container } from "react-bootstrap";
import "./Footer.css";

export const Footer = () => {
  return (
    <div className="bg-black py-4">
      <Container>
        <div className="text-center text-white-50 g-2 p-3">
          <div className="d-flex align-items-center gap-2 justify-content-around">
            <div className="border footerBoxesBg p-3">Contact Us</div>
            <div className="border footerBoxesBg p-3">Order Status</div>
            <div className="border footerBoxesBg p-3">Shipping & Delivery</div>
            <div className="border footerBoxesBg p-3">Store Finder</div>
            <div className="border footerBoxesBg p-3">Returns & Refunds</div>
            <div className="border footerBoxesBg p-3">Help Center</div>
          </div>
          <div>
            <div>
              <div> Legal Information</div>

              {/* Accordian UL/LI */}
            </div>
            <div>
              <div>About</div>
              {/* Accordian  */}
            </div>
          </div>
          <div>
            <hr /> <div> &copy; made with fun by Aashish</div>
            <hr />
          </div>
          <div>
            Prices subject to change without notice. Products shown may not be
            available in our stores.
          </div>
        </div>
      </Container>
    </div>
  );
};
