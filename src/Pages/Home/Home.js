import SwiperSlider from "../../components/Shared/SwiperSlider/SwiperSlider";
import About from "./About";
import FeaturedTools from "./FeaturedTools";
import Reviews from "../../components/Reviews/Reviews";
import Testimonial from "./Testimonial";
import BusinessStats from "../../components/BusinessStats/BusinessStats";

const Home = () => {
  return (
    <>
      <SwiperSlider></SwiperSlider>
      <FeaturedTools></FeaturedTools>
      <Testimonial></Testimonial>
      <About></About>
      <Reviews></Reviews>
      <BusinessStats></BusinessStats>
    </>
  );
};

export default Home;
