import React from "react";
import { DefaultLayout } from "../../components/layouts/DefaultLayout";
import { Featured } from "../../components/featured/Featured";
import { SwiperSlider } from "../../components/swiperSlider/SwiperSlider";
import { NewAndTrending } from "../../components/newAndTrending/NewAndTrending";
import { ShopByCategory } from "../../components/shopbyCategory/ShopByCategory";
import { ImageHead } from "../../components/imageHead/ImageHead";

import Jelly from "../../assets/videos/jellyfish.mp4";

const backgroundImageL = "https://picsum.photos/id/28/2000";
const backgroundImageM = "https://picsum.photos/id/22/600";

const title = "Fit Studio";

export const Womens = () => {
  const image = window.innerWidth > 768 ? backgroundImageL : backgroundImageM;
  return (
    <DefaultLayout>
      <ImageHead backgroundImage={image} video={Jelly} title={title} />
      <Featured />
      <SwiperSlider />
      <NewAndTrending />
      <ShopByCategory />
    </DefaultLayout>
  );
};
