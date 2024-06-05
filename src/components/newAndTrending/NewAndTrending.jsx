import React from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const NewAndTrending = () => {
  return (
    <>
      <Row className="m-2">
        <Col className="text-center fw-bolder">New & Trending</Col>
      </Row>
      <Row className="d-flex justify-content-between gap-1">
        <Col className="p-0 md-6">
          <Card className="border-0">
            <img
              src={`https://picsum.photos/seed/picsum/200`}
              style={{ height: "50vh" }}
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
        <Col className="p-0 md-6">
          <Card className="border-0">
            <img
              src={`https://picsum.photos/seed/picsum/200`}
              style={{ height: "50vh" }}
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
