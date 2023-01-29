import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import styles from "./SwiperSlider.module.css";

// import required modules
import { Navigation } from "swiper";

const SwiperSlider = () => {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="swiper-slider"
      >
        <SwiperSlide className={styles.slider1}>
          <div
            className={styles.swiper_bg}
            style={{ backgroundImage: "url('./images/banner-1.jpg')" }}
          >
            <h1 className={styles.heading}> Slide 1</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.slider2}>
          <div
            className={styles.swiper_bg}
            style={{ backgroundImage: "url('./images/banner-2.jpg')" }}
          >
            <h1 className={styles.heading}> Slide 2</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.slider3}>
          <div
            className={styles.swiper_bg}
            style={{ backgroundImage: "url('./images/banner-3.jpg')" }}
          >
            <h1 className={styles.heading}> Slide 3</h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default SwiperSlider;
