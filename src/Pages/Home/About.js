const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row gap-30">
        <img
          src="https://placeimg.com/260/400/arch"
          className="max-w-sm rounded-lg shadow-2xl"
          alt=""
        />
        <div>
          <h1 className="text-5xl font-bold">
            We Have The Best Tools Collection!
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Your Tool</button>
        </div>
      </div>
    </div>
  );
};

export default About;
