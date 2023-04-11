import SwiperSlider from "../../components/Shared/SwiperSlider/SwiperSlider";
import About from "./About";
import FeaturedTools from "./FeaturedTools";
import Reviews from "../../components/Reviews/Reviews";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <>
      <SwiperSlider></SwiperSlider>
      <FeaturedTools></FeaturedTools>
      <Testimonial></Testimonial>
      <About></About>
      <Reviews></Reviews>
    </>
  );
};

export default Home;
