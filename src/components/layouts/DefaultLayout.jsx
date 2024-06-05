import { Header } from "../layouts/Header";
import { Footer } from "../layouts/Footer";
import { TopBar } from "./topBar/TopBar";

export const DefaultLayout = ({ children }) => {
  return (
    <div>
      <TopBar />
      {/* header  */}
      <Header />

      {/* body  */}
      <main className="main min-vh-80">{children}</main>
      {/* footer  */}
      <Footer />
    </div>
  );
};
