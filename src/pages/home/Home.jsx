import { CarouselSlider } from "../../components/homeComponents/CarouselSlider";
import { DefaultLayout } from "../../components/layouts/DefaultLayout";
import { SaleBar } from "../../components/layouts/saleBar/SaleBar";

const Home = () => {
  return (
    <DefaultLayout>
      {/* <div className="min-vh-100">
        <SwiperSlider />
      </div> */}
      <SaleBar />
      <CarouselSlider />
    </DefaultLayout>
  );
};

export default Home;
