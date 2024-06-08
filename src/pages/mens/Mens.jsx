import React from "react";
import { DefaultLayout } from "../../components/layouts/DefaultLayout";
import { Featured } from "../../components/featured/Featured";
import { SwiperSlider } from "../../components/swiperSlider/SwiperSlider";
import { NewAndTrending } from "../../components/newAndTrending/NewAndTrending";
import { ShopByCategory } from "../../components/shopbyCategory/ShopByCategory";
import { ImageHead } from "../../components/imageHead/ImageHead";

export const Mens = () => {
  return (
    <DefaultLayout>
      <ImageHead />
      <Featured />
      <SwiperSlider />
      <NewAndTrending />
      <ShopByCategory />
    </DefaultLayout>
  );
};
