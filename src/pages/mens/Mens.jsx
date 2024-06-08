import React from "react";
import { DefaultLayout } from "../../components/layouts/DefaultLayout";
import { Featured } from "../../components/featured/Featured";
import { SwiperSlider } from "../../components/swiperSlider/SwiperSlider";
import { NewAndTrending } from "../../components/newAndTrending/NewAndTrending";
import { ShopByCategory } from "../../components/shopbyCategory/ShopByCategory";
import { ImageHead } from "../../components/imageHead/ImageHead";
import TopImageMen from "../../assets/images/Mens-VideoHeader-HomeOfFootball-d.jpg"; // Import the image directly
import Jelly from "../../assets/videos/jellyfish.mp4";

const title = "HOME OF FOOTBALL";
export const Mens = () => {
  return (
    <DefaultLayout>
      <ImageHead backgroundImage={TopImageMen} video={Jelly} title={title} />
      <Featured />
      <SwiperSlider />
      <NewAndTrending />
      <ShopByCategory />
    </DefaultLayout>
  );
};
