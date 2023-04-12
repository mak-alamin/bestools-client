const Testimonial = () => {
  return (
    <div className="testimonial flex flex-col mt-10">
      <div className="overlay py-20">
        <h3 className="text-3xl font-bold text-center text-white mb-5">
          Happy Clients Say
        </h3>
        <div className="carousel w-full">
          <div id="item1" className="carousel-item w-full flex-col pt-5">
            <div className="avatar mx-auto mb-5">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://placeimg.com/192/192/people" alt="" />
              </div>
            </div>
            <p className="text-center text-white w-3/5 mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              autem minus perferendis voluptate maxime, quod, aliquid soluta
              quam rerum error sit assumenda vero temporibus quis dignissimos
              facilis. Fuga, voluptates quos?
            </p>
          </div>
          <div id="item2" className="carousel-item w-full flex-col pt-5">
            <div className="avatar mx-auto mb-5">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://placeimg.com/192/192/people" alt="" />
              </div>
            </div>
            <p className="text-center text-white w-3/5 mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              autem minus perferendis voluptate maxime, quod, aliquid soluta
              quam rerum error sit assumenda vero temporibus quis dignissimos
              facilis. Fuga, voluptates quos?
            </p>
          </div>
          <div id="item3" className="carousel-item w-full flex-col pt-5">
            <div className="avatar mx-auto mb-5">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://placeimg.com/192/192/people" alt="" />
              </div>
            </div>
            <p className="text-center text-white w-3/5 mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              autem minus perferendis voluptate maxime, quod, aliquid soluta
              quam rerum error sit assumenda vero temporibus quis dignissimos
              facilis. Fuga, voluptates quos?
            </p>
          </div>
        </div>
        <div className="flex justify-center w-full pt-10 gap-2">
          <a href="#item1" className="btn btn-xs">
            1
          </a>
          <a href="#item2" className="btn btn-xs">
            2
          </a>
          <a href="#item3" className="btn btn-xs">
            3
          </a>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
