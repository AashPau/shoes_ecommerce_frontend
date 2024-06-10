import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";

export const Footer = () => {
  return (
    <div className="bg-black py-4">
      <Container>
        <div className="text-center text-white g-2 p-3">
          <Row
            md={6}
            className="d-flex align-items-center justify-content-around gap-2"
          >
            <Col className="border footerBoxesBg p-3 md-2 flex-grow-1">
              <img src="/src/assets/images/icons/contact.svg" />
              <p>Contact Us</p>
            </Col>
            <Col className="border footerBoxesBg p-3 md-2 flex-grow-1">
              <img src="/src/assets/images/icons/parcel.svg" />
              <p>Order Status</p>
            </Col>
            <Col className="border footerBoxesBg p-3 md-2 flex-grow-1">
              <img src="/src/assets/images/icons/delivery.svg" />
              <p>Shipping & Delivery</p>
            </Col>
            <Col className="border footerBoxesBg p-3 md-2 flex-grow-1">
              <img src="/src/assets/images/icons/store.svg" />
              <p>Store Finder</p>
            </Col>
            <Col className="border footerBoxesBg p-3 md-2 flex-grow-1">
              <img src="/src/assets/images/icons/return.svg" />
              <p>Returns & Refunds</p>
            </Col>
            <Col className="border footerBoxesBg p-3 md-2 flex-grow-1">
              <img src="/src/assets/images/icons/help.svg" />
              <p>Help Center</p>
            </Col>
          </Row>
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
