import { Featured } from "../../components/featured/Featured";
import { CarouselSlider } from "../../components/carouselSlider/CarouselSlider";
import { SwiperSlider } from "../../components/swiperSlider/SwiperSlider";
import { DefaultLayout } from "../../components/layouts/DefaultLayout";
import { NewAndTrending } from "../../components/newAndTrending/NewAndTrending";
import { ShopByCategory } from "../../components/shopbyCategory/ShopByCategory";

const Home = () => {
  return (
    <DefaultLayout>
      {/* <div className="min-vh-100">
       
      </div> */}

      {/* <TryBar /> */}
      <CarouselSlider />
      <Featured />
      <SwiperSlider />
      <NewAndTrending />
      <ShopByCategory />
    </DefaultLayout>
  );
};

export default Home;
