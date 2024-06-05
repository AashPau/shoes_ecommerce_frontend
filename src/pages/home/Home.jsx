import { Featured } from "../../components/featured/Featured";
import { CarouselSlider } from "../../components/homeComponents/CarouselSlider";
import { SwiperSlider } from "../../components/homeComponents/swiperSlider/SwiperSlider";
import { DefaultLayout } from "../../components/layouts/DefaultLayout";
import { SaleBar } from "../../components/layouts/saleBar/SaleBar";
import { NewAndTrending } from "../../components/newAndTrending/NewAndTrending";
import { TryBar } from "../../components/try/bryBar";

const Home = () => {
  return (
    <DefaultLayout>
      {/* <div className="min-vh-100">
       
      </div> */}
      <SaleBar />
      {/* <TryBar /> */}
      <CarouselSlider />
      <Featured />
      <SwiperSlider />
      <NewAndTrending />
    </DefaultLayout>
  );
};

export default Home;
