import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";
import { Link } from "react-router-dom";

const footerLinks = [
  {
    title: "Contact Us",
    imageUrl: "/src/assets/images/icons/contact.svg",
    linkUrl: "/helpcenter",
  },
  {
    title: "Order Status",
    imageUrl: "/src/assets/images/icons/parcel.svg",
    linkUrl: "/helpcenter",
  },
  {
    title: "Shipping & Delivery",
    imageUrl: "/src/assets/images/icons/delivery.svg",
    linkUrl: "/helpcenter",
  },
  {
    title: "Store Finder",
    imageUrl: "/src/assets/images/icons/store.svg",
    linkUrl: "/helpcenter",
  },
  {
    title: "Returns & Refunds",
    imageUrl: "/src/assets/images/icons/return.svg",
    linkUrl: "/helpcenter",
  },
  {
    title: "Help Center",
    imageUrl: "/src/assets/images/icons/help.svg",
    linkUrl: "/helpcenter",
  },
];

export const Footer = () => {
  return (
    <div className="bg-dark py-4">
      <Container>
        <div className="text-center text-white g-2 p-3">
          <Row className="d-flex gap-2">
            {footerLinks.map((item, i) => (
              <Col key={i} className="d-flex border rounded p-3 md-2 ">
                <div className="footerBoxesBg d-flex flex-column flex-grow-1 align-items-center justify-content-center">
                  <Link
                    to={item.linkUrl}
                    className="text-decoration-none text-white "
                  >
                    <img src={item.imageUrl} />
                    <p>{item.title}</p>
                  </Link>
                </div>
              </Col>
            ))}
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
