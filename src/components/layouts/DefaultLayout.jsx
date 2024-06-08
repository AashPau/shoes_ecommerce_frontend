import { Header } from "../layouts/Header";
import { Footer } from "../layouts/Footer";
import { TopBar } from "./topBar/TopBar";
import { SaleBar } from "./saleBar/SaleBar";

export const DefaultLayout = ({ children }) => {
  return (
    <div>
      <TopBar />
      {/* header  */}
      <Header />
      <SaleBar />

      {/* body  */}
      <main className="main min-vh-80">{children}</main>
      {/* footer  */}
      <Footer />
    </div>
  );
};
