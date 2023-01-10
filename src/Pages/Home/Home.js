import SwiperSlider from "../Shared/SwiperSlider/SwiperSlider";
import About from "./About";
import FeaturedTools from "./FeaturedTools";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div>
      <SwiperSlider></SwiperSlider>
      <FeaturedTools></FeaturedTools>
      <Testimonial></Testimonial>
      <About></About>
    </div>
  );
};

export default Home;
