import { Container } from "react-bootstrap";
import "./Footer.css";

export const Footer = () => {
  return (
    <div className="bg-black py-4">
      <Container>
        <div className="text-center text-white g-2 p-3">
          <div className="d-flex align-items-center gap-2 justify-content-around">
            <div className="border footerBoxesBg p-3">Contact Us</div>
            <div className="border footerBoxesBg p-3">Order Status</div>
            <div className="border footerBoxesBg p-3">Shipping & Delivery</div>
            <div className="border footerBoxesBg p-3">Store Finder</div>
            <div className="border footerBoxesBg p-3">Returns & Refunds</div>
            <div className="border footerBoxesBg p-3">Help Center</div>
          </div>
          <div className="d-flex text-start mt-4 p-3 gap-5">
            <div>
              <div className="fw-bolder"> Legal Information</div>
              <ul className="list-unstyled">
                <li>Terms $ Conditions</li>
                <li>Promotion Terms & Conditions </li>
                <li>Privacy Policy </li>
                <li>Cookie Seetings</li>
              </ul>
            </div>
            <div>
              <div className="fw-bolder">About</div>
              <ul className="list-unstyled">
                <li>Store Locator</li>
                <li>All Stores</li>
                <li>About Foot Locker</li>
                <li>Careers</li>
              </ul>
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
