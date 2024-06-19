import { Col, Form, InputGroup, Row } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

export const HelpCenter = () => {
  return (
    <div>
      <div className="bg-dark text-white p-5">
        <div className="text-center m-4">How can we help you </div>
        <div>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">
              <FaSearch />
            </InputGroup.Text>
            <Form.Control
              placeholder="Search"
              aria-label="Search"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </div>
      </div>
      <div className="mt-5">
        <Row className="m-2">
          <Col className="pointer d-flex border align-items-center justify-content-center flex-column rounded">
            <img src="https://help.footlocker.com.au/hc/theming_assets/01HZPD8HW0CX41G9DPJNAHC599"></img>
            <h4>Product Information</h4>
          </Col>
          <Col className="pointer d-flex border align-items-center justify-content-center flex-column rounded">
            <img src="https://help.footlocker.com.au/hc/theming_assets/01HZPD8GWFVE6ZTT732H3E6CNP"></img>
            <h4>Payments & Orders</h4>
          </Col>
          <Col className="pointer d-flex border align-items-center justify-content-center flex-column rounded">
            <img src="https://help.footlocker.com.au/hc/theming_assets/01HZPD8HP9RNRQSAQT5E9X7AND"></img>
            <h4>Shipping & Delivery</h4>
          </Col>
        </Row>
        <Row className="m-2">
          <Col className="pointer d-flex border align-items-center justify-content-center flex-column rounded">
            <img src="https://help.footlocker.com.au/hc/theming_assets/01HZPD8JKSADHBRTC3SHSY2KBK"></img>
            <h4>Return & Refunds</h4>
          </Col>
          <Col className="pointer d-flex border align-items-center justify-content-center flex-column rounded">
            <img src="https://help.footlocker.com.au/hc/theming_assets/01HZPD8G5VCJA2FM01VW951CYS"></img>
            <h4>My Account</h4>
          </Col>
          <Col className="pointer d-flex border align-items-center justify-content-center flex-column rounded">
            <img src="https://help.footlocker.com.au/hc/theming_assets/01HZPD8EH4GSPMD87QT8688CX3"></img>
            <h4>Contact</h4>
          </Col>
        </Row>
      </div>
    </div>
  );
};
