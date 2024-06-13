import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "./SwiperSlider.css";

// import required modules
import { Navigation, Pagination } from "swiper/modules";

export const ShopByCategory = () => {
  return (
    <div className="my-4">
      <div className="text-center roboto-condensed-font fs-2 mb-4">
        SHOP BY CATEGORY
      </div>
      <div>
        <Swiper
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          loop={true}
          clickable={true}
          pagination={true}
          slidesPerView={3}
          spaceBetween={0}
          breakpoints={{
            768: {
              slidesPerView: 3,
              spaceBetween: 0,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 0,
            },
            1200: {
              slidesPerView: 6,
              spaceBetween: 0,
            },
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={"https://picsum.photos/id/5/400/400"} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={"https://picsum.photos/id/6/400/400"} />
          </SwiperSlide>{" "}
          <SwiperSlide>
            <img src={"https://picsum.photos/id/7/400/400"} />
          </SwiperSlide>{" "}
          <SwiperSlide>
            <img src={"https://picsum.photos/id/8/400/400"} />
          </SwiperSlide>{" "}
          <SwiperSlide>
            <img src={"https://picsum.photos/id/9/400/400"} />
          </SwiperSlide>{" "}
          <SwiperSlide>
            <img src={"https://picsum.photos/id/10/400/400"} />
          </SwiperSlide>{" "}
          <SwiperSlide>
            <img src={"https://picsum.photos/id/11/400/400"} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={"https://picsum.photos/id/12/400/400"} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={"https://picsum.photos/id/13/400/400"} />
          </SwiperSlide>{" "}
          <SwiperSlide>
            <img src={"https://picsum.photos/id/14/400/400"} />
          </SwiperSlide>{" "}
          <SwiperSlide>
            <img src={"https://picsum.photos/id/15/400/400"} />
          </SwiperSlide>{" "}
          <SwiperSlide>
            <img src={"https://picsum.photos/id/16/400/400"} />
          </SwiperSlide>{" "}
          <SwiperSlide>
            <img src={"https://picsum.photos/id/17/400/400"} />
          </SwiperSlide>{" "}
          <SwiperSlide>
            <img src={"https://picsum.photos/id/18/400/400"} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
