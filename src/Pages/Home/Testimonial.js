const Testimonial = () => {
  return (
    <div className="testimonial">
      <div className="overlay py-20 flex flex-col items-center justify-center">
        <h3 className="text-3xl font-bold text-center text-white mb-5">
          Happy Clients Say
        </h3>
        <div className="carousel w-full">
          <div
            id="item1"
            className="min-h-[60vh] carousel-item w-full flex-col pt-5 justify-center"
          >
            <div className="avatar mx-auto mb-5">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="/images/avator-1.jpg" alt="" />
              </div>
            </div>
            <p className="text-center text-white w-3/5 mx-auto">
              "I was blown away by the selection of tools available on this
              website. I needed a specific tool for a project, and I was able to
              find exactly what I was looking for quickly and easily. Shipping
              was fast, and the quality of the tool was top-notch. I will
              definitely be returning to this site for all of my future tool
              needs!"
            </p>
            <p className="text-center text-white w-3/5 mx-auto">- Sarah T.</p>
          </div>
          <div
            id="item2"
            className="min-h-[60vh] carousel-item w-full flex-col pt-5 justify-center"
          >
            <div className="avatar mx-auto mb-5">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="/images/avator-2.jpg" alt="" />
              </div>
            </div>
            <p className="text-center text-white w-3/5 mx-auto">
              "I was hesitant to purchase tools online, but this website
              exceeded my expectations. The customer service team was incredibly
              helpful in answering my questions and helping me choose the right
              tool for my needs. The tool arrived quickly, and I was impressed
              with the quality. I will be recommending this website to all of my
              friends and colleagues!"
            </p>
            <p className="text-center text-white w-3/5 mx-auto">- John S.</p>
          </div>
          <div
            id="item3"
            className="min-h-[60vh] carousel-item w-full flex-col pt-5 justify-center"
          >
            <div className="avatar mx-auto mb-5">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="/images/avator-3.jpg" alt="" />
              </div>
            </div>
            <p className="text-center text-white w-3/5 mx-auto">
              "I have purchased multiple tools from this website, and I have
              never been disappointed. The prices are competitive, and the
              quality of the tools is exceptional. I appreciate the attention to
              detail and care that goes into selecting the tools for sale. I
              trust this website for all of my tool needs and recommend it to
              anyone in the market for quality tools!"
            </p>
            <p className="text-center text-white w-3/5 mx-auto">- Michael R.</p>
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
