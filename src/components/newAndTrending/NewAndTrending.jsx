import React from "react";
import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "./NewAndTrending.css";

export const NewAndTrending = () => {
  return (
    <>
      <Row className="m-2 my-4">
        <Col className="text-center roboto-condensed-font fs-2">
          NEW & TRENDING
        </Col>
      </Row>
      <Row className="gap-2 d-flex justify-content-between">
        <Col className="p-0 md-6 card-responsive">
          <Card className="border-0 ">
            <img
              src={`https://picsum.photos/seed/picsum/600/450`}
              // style={{ height: "50vh" }}
              className="card-img-top"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card content.
              </Card.Text>
              <div className="fw-bolder">Shop &gt; </div>
            </Card.Body>
          </Card>
        </Col>
        <Col className="p-0 md-6 card-responsive">
          <Card className="border-0">
            <img
              src={`https://picsum.photos/600/450`}
              className="card-img-top"
            />

            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card content.
              </Card.Text>
              <div className="fw-bolder">Shop &gt; </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};
