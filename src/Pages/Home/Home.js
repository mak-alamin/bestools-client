import About from "./About";
import Banner from "./Banner";
import FeaturedTools from "./FeaturedTools";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <FeaturedTools></FeaturedTools>
      <Testimonial></Testimonial>
      <About></About>
    </div>
  );
};

export default Home;
