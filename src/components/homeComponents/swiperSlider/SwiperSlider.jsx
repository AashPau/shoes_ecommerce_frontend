import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./SwiperSlider.css";

// import required modules
import { Navigation, Pagination } from "swiper/modules";
import { Container } from "react-bootstrap";

export const SwiperSlider = () => {
  return (
    <>
      <div className="text-center roboto-condensed-font fs-2 my-5">
        SAVE ON THERABODY
      </div>
      <div>
        {" "}
        <Swiper
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          loop={true}
          clickable={true}
          pagination={true}
          slidesPerView={3}
          spaceBetween={30}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={`https://picsum.photos/id/1/200`} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={`https://picsum.photos/id/5/200`} />
          </SwiperSlide>{" "}
          <SwiperSlide>
            <img src={`https://picsum.photos/id/10/200`} />
          </SwiperSlide>{" "}
          <SwiperSlide>
            <img src={`https://picsum.photos/id/15/200`} />
          </SwiperSlide>{" "}
          <SwiperSlide>
            <img src={`https://picsum.photos/id/30/200`} />
          </SwiperSlide>{" "}
          <SwiperSlide>
            <img src={`https://picsum.photos/id/25/200`} />
          </SwiperSlide>{" "}
          <SwiperSlide>
            <img src={`https://picsum.photos/id/20/200`} />
          </SwiperSlide>{" "}
          <SwiperSlide>
            <img src={`https://picsum.photos/id/12/200`} />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};
