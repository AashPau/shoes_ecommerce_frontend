import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const DefaultLayout = ({ children }) => {
  return (
    <div>
      {/* header  */}
      <Header />
      {/* body  */}
      <main className="main">{children}</main>
      {/* footer  */}
      <Footer />
    </div>
  );
};
