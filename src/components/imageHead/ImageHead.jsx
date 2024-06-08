import "./imageHead.css";
import Jelly from "../../assets/videos/jellyfish.mp4";
import { Button, Col, Row } from "react-bootstrap";

export const ImageHead = () => {
  return (
    <div className="imageHead">
      <Row style={{ minHeight: "70vh" }}>
        <Col className="d-flex justify-content-center align-items-center">
          <div className="d-flex p-5 flex-column justify-content-center align-items-center">
            <h2 className="text-white fs-1"> Home Of Football</h2>
            <Button className="">SHOP</Button>
          </div>
        </Col>
        <Col>
          {" "}
          <div className="m-auto ">
            <video
              src={Jelly}
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
