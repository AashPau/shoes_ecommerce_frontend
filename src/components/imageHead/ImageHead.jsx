import "./imageHead.css";

import { Button, Col, Row } from "react-bootstrap";

export const ImageHead = ({ backgroundImage, video, title }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Row style={{ minHeight: "70vh" }}>
        <Col className="d-flex justify-content-center align-items-center">
          <div className="d-flex gap-2 p-5 flex-column justify-content-center align-items-center">
            <h2 className="text-white fs-1 fw-bolder">{title}</h2>
            <Button className="">SHOP</Button>
          </div>
        </Col>
        <Col className="d-flex align-items-center justify-content-center">
          <div className="d-block">
            <video
              src={video}
              width="600"
              height="400"
              autoPlay={true}
              loop={true}
              muted
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};
