import { Col, Container, Row, Button, Card } from "react-bootstrap";

export const Featured = () => {
  return (
    <div className="my-5">
      <Row>
        <Col className="text-center roboto-condensed-font fs-2">
          FEATURED OFFERS
        </Col>
      </Row>
      <Row className="mt-3 ">
        <Col className="md-3 d-flex justify-content-center">
          <Card style={{ width: "28rem" }}>
            <div style={{ position: "relative" }}>
              <Card.Img
                variant="top"
                src={`https://picsum.photos/id/26/400/425`}
              />
              <div
                style={{ position: "absolute", bottom: "0", right: "0" }}
                className="p-2 m-2 bg-warning rounded"
              >
                Sale
              </div>
            </div>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className="md-3 d-flex justify-content-center">
          <Card style={{ width: "28rem" }}>
            <Card.Img
              variant="top"
              src={`https://picsum.photos/id/20/400/425`}
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className="md-3 d-flex justify-content-center">
          <Card style={{ width: "28rem" }}>
            <Card.Img
              variant="top"
              src={`https://picsum.photos/id/16/400/425`}
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className="md-3 d-flex justify-content-center">
          <Card style={{ width: "28rem" }}>
            <Card.Img
              variant="top"
              src={`https://picsum.photos/id/30/400/425`}
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
