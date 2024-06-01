import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { AuthRoute } from "../auth/AuthRoute";
import { UserSidebar } from "./UserSidebar";

export const UserLayout = ({ children, pageTitle }) => {
  const { user } = useSelector((state) => state.userInfo);
  return (
    <AuthRoute>
      <div>
        {/* header  */}
        <Header />
        <Container fluid>
          <Row>
            <Col xs={3} className="bg-dark text-light">
              <div className="p-3 text-center">
                <div>Welcome Back</div>
                <h3>{user.name}</h3>
              </div>
              <hr />
              <UserSidebar />
            </Col>
            <Col>
              <div className="p-2">{pageTitle}</div>
              <hr />
              <main className="main">{children}</main>
            </Col>
          </Row>
        </Container>

        {/* footer  */}
        <Footer />
      </div>
    </AuthRoute>
  );
};
