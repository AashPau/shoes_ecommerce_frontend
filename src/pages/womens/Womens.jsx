import React from "react";
import { DefaultLayout } from "../../components/layouts/DefaultLayout";
import { Featured } from "../../components/featured/Featured";
import { SwiperSlider } from "../../components/swiperSlider/SwiperSlider";
import { NewAndTrending } from "../../components/newAndTrending/NewAndTrending";
import { ShopByCategory } from "../../components/shopbyCategory/ShopByCategory";
import { ImageHead } from "../../components/imageHead/ImageHead";
import TopImageWomen from "../../assets/images/FitStudio-VideoHeader-d.jpg";
import Jelly from "../../assets/videos/jellyfish.mp4";

const title = "Fit Studio";
export const Womens = () => {
  return (
    <DefaultLayout>
      <ImageHead backgroundImage={TopImageWomen} video={Jelly} title={title} />
      <Featured />
      <SwiperSlider />
      <NewAndTrending />
      <ShopByCategory />
    </DefaultLayout>
  );
};
