import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { AuthRoute } from "../auth/AuthRoute";
import { UserTopBar } from "./UserTopBar.jsx";

export const UserLayout = ({ children, pageTitle }) => {
  const { user } = useSelector((state) => state.userInfo);
  return (
    <AuthRoute>
      <div>
        {/* header  */}
        <Header />

        <div className="d-flex flex-column bg-dark text-light">
          <div className="p-3 text-center">
            <div>Welcome Back</div>
            <h3>{user.name}</h3>
          </div>
          <hr />
          <UserTopBar />
        </div>

        <div className="">
          {pageTitle ? (
            <>
              <div className="p-2">
                {pageTitle}
                <hr />
              </div>
            </>
          ) : null}
          <main className="main">{children}</main>
        </div>

        {/* footer  */}
        <Footer />
      </div>
    </AuthRoute>
  );
};
