import { Header } from "../layouts/Header";
import { Footer } from "../layouts/Footer";

export const DefaultLayout = ({ children }) => {
  return (
    <div>
      {/* header  */}
      <Header />
      {/* body  */}
      <main className="main min-vh-80">{children}</main>
      {/* footer  */}
      <Footer />
    </div>
  );
};
