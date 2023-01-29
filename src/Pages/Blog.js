import React from "react";

const Blog = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-5xl font-bold text-center my-5">Blog</h1>

      <div tabIndex={0} className="collapse mb-4">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          Quest 1
        </div>
        <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          <p>Ans 1</p>
        </div>
      </div>

      <div tabIndex={1} className="collapse mb-4">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          Quest 2
        </div>
        <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          <p>Ans 2</p>
        </div>
      </div>

      <div tabIndex={2} className="collapse mb-4">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          Quest 3
        </div>
        <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          <p>Ans 3</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
