import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import styles from "./SwiperSlider.module.css";

// import required modules
import { Navigation } from "swiper";

const MobileSlider = () => {
  return (
    <div className="md:hidden">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="swiper-slider"
      >
        <SwiperSlide className={styles.slider1}>
          <div
            className={`${styles.swiper_bg}`}
            style={{ backgroundImage: "url('./images/mbanner-1.jpg')" }}
          >
            <div className="container">
              <h1 className={styles.heading}>Innovative Tool Manufacturing</h1>
              <h1 className={styles.heading}>For Every Industry</h1>
              <a
                href="#featured_tools"
                className="btn bg-black hover:bg-info max-w-max text-white md:text-lg text-md border-0 mt-5"
              >
                Get Your Tool
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.slider2}>
          <div
            className={styles.swiper_bg}
            style={{
              backgroundImage: "url('./images/banner-2.jpg')",
            }}
          >
            <div className="container flex flex-col items-end">
              <h1 className={styles.heading}> Experience the</h1>
              <h1 className={styles.heading}> Difference of</h1>
              <h1 className={styles.heading}> Quality Tools</h1>

              <a
                href="#featured_tools"
                className="btn bg-primary hover:bg-info max-w-max text-white md:text-lg text-md border-0 mt-5"
              >
                Get Your Tool
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.slider3}>
          <div
            className={styles.swiper_bg}
            style={{ backgroundImage: "url('./images/mbanner-3.jpg')" }}
          >
            <div className="container">
              <h1 className={styles.heading}> Built to Endure,</h1>
              <h1 className={styles.heading}>BESTools Manufacturer</h1>
              <h1 className={styles.heading}>Is With You.</h1>
              <a
                href="#featured_tools"
                className="btn bg-primary hover:bg-info max-w-max text-white md:text-lg text-md border-0 mt-5"
              >
                Get Your Tool
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default MobileSlider;
