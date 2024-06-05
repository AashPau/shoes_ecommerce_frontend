import { Col, Container, Row, Button, Card } from "react-bootstrap";

export const Featured = () => {
  return (
    <Container className="my-4">
      <Row>
        <Col className="text-center  roboto-condensed-font fs-2">
          Featured Offers
        </Col>
      </Row>
      <Row className="g-2 mt-2">
        <Col className="md-3">
          <Card style={{ width: "18rem" }}>
            <div style={{ position: "relative" }}>
              <Card.Img
                variant="top"
                src={`https://picsum.photos/id/26/200/300`}
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
        <Col className="md-3">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={`https://picsum.photos/id/26/200/300`}
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
        <Col className="md-3">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={`https://picsum.photos/id/26/200/300`}
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
        <Col className="md-3">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={`https://picsum.photos/id/26/200/300`}
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
    </Container>
  );
};
