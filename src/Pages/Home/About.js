const About = () => {
  return (
    <div className="hero py-32 bg-base-200">
      <div className="hero-content flex gap-10">
        <img
          src="/images/top-view-different-types-tools.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
          alt=""
        />
        <div>
          <h2 className="text-5xl font-bold">
            We Have The Best Tools Collection
          </h2>
          <h3 className="text-5xl font-bold">For You.</h3>
          <p className="py-6">
            We have exceptional assortment of tools that have been carefully
            curated to meet the needs of our customers. We are dedicated to
            providing high-quality tools, whether they be physical or digital,
            to ensure our customers have the best resources at their disposal.
            Trust in our expertise and find the tools you need to succeed in
            your personal or professional endeavors.
          </p>
          <a href="#featured_tools" className="btn btn-primary"> Get Your Tool </a>
        </div>
      </div>
    </div>
  );
};

export default About;
