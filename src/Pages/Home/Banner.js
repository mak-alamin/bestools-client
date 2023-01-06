const Banner = () => {
  return (
    <div className="carousel w-full min-h-[90vh]">
      <div id="slide1" className="carousel-item relative w-full">
        <div
          className="w-full banner-bg"
          style={{
            backgroundImage: `url('./images/banner-1.jpg')`,
          }}
        >
          <div className="container h-full mx-auto flex items-center p-20">
            <h1 className="text-5xl font-bold">Slide 1 Title</h1>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <div
          className="w-full banner-bg"
          style={{
            backgroundImage: `url('./images/banner-2.jpg')`,
          }}
        >
          <div className="container mx-auto h-full flex items-center justify-end p-20">
            <h1 className="text-5xl font-bold text-white">Slide 2 Title</h1>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <div
          className="w-full banner-bg"
          style={{
            backgroundImage: `url('./images/banner-3.jpg')`,
          }}
        >
          <div className="container mx-auto h-full flex items-center p-20">
            <h1 className="text-5xl font-bold text-[#e8c600]">Slide 3 Title</h1>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
