import { CarouselSlider } from "../../components/homeComponents/CarouselSlider";
import { SwiperSlider } from "../../components/homeComponents/SwiperSlider";
import { DefaultLayout } from "../../components/layouts/DefaultLayout";

const Home = () => {
  return (
    <DefaultLayout>
      {/* <CarouselSlider /> */}
      <div className="min-vh-100">
        <SwiperSlider />
      </div>
    </DefaultLayout>
  );
};

export default Home;
