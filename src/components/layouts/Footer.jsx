import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";

export const Footer = () => {
  return (
    <div className="bg-black py-4">
      <Container>
        <div className="text-center text-white g-2 p-3">
          <Row className="d-flex gap-2">
            <Col className="d-flex border rounded p-3 md-2 ">
              <div className="footerBoxesBg d-flex flex-column flex-grow-1 align-items-center justify-content-center">
                <img src="/src/assets/images/icons/contact.svg" />
                <p>Contact Us</p>
              </div>
            </Col>
            <Col className="d-flex border rounded p-3 md-2">
              <div className="footerBoxesBg d-flex flex-column flex-grow-1 align-items-center justify-content-center">
                <img src="/src/assets/images/icons/parcel.svg" />
                <p>Order Status</p>
              </div>
            </Col>
            <Col className="d-flex border rounded p-3 md-2 ">
              <div className="footerBoxesBg d-flex flex-column flex-grow-1 align-items-center justify-content-center">
                <img src="/src/assets/images/icons/delivery.svg" />
                <p>Shipping & Delivery</p>
              </div>
            </Col>
            <Col className="d-flex border rounded p-3 md-2 ">
              <div className="footerBoxesBg d-flex flex-column flex-grow-1 align-items-center justify-content-center">
                <img src="/src/assets/images/icons/store.svg" />
                <p>Store Finder</p>
              </div>
            </Col>
            <Col className="d-flex border rounded p-3 md-2 ">
              <div className="footerBoxesBg d-flex flex-column flex-grow-1 align-items-center justify-content-center">
                <img src="/src/assets/images/icons/return.svg" />
                <p>Returns & Refunds</p>
              </div>
            </Col>
            <Col className="d-flex border rounded p-3 md-2 ">
              <div className="footerBoxesBg d-flex flex-column flex-grow-1 align-items-center justify-content-center">
                <img src="/src/assets/images/icons/help.svg" />
                <p>Help Center</p>
              </div>
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
