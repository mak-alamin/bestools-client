import React from "react";

import {
  faAngleDown,
  faHandPointRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Blog = () => {
  return (
    <div className="blog max-w-2xl mx-auto">
      <h1 className="text-5xl font-bold text-center my-5">Blog</h1>

      <div tabIndex={0} className="collapse mb-4">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-info peer-checked:bg-info">
          <span>
            1. How will you improve the performance of a React Application?
          </span>{" "}
          <FontAwesomeIcon icon={faAngleDown} />
        </div>
        <div className="collapse-content bg-info text-primary-content peer-checked:bg-info peer-checked:text-primary-content border-t-2">
          <p className="pt-3">
            Here are some actions that can be performed to improve the
            performance of a React Application:
          </p>
          <p className="pt-3">
            <FontAwesomeIcon icon={faHandPointRight} className="mr-2" />
            Use PureComponent to prevent unnecessary re-renders of components.
          </p>
          <p className="pt-3">
            <FontAwesomeIcon icon={faHandPointRight} className="mr-2" />
            Implement code-splitting to reduce the size of the initial bundle
            that needs to be downloaded by the client.
          </p>
          <p className="pt-3">
            <FontAwesomeIcon icon={faHandPointRight} className="mr-2" />
            Use React.memo() to memoize and cache the results of expensive
            function calls.
          </p>
          <p className="pt-3">
            <FontAwesomeIcon icon={faHandPointRight} className="mr-2" />
            Use lazy loading to defer the loading of non-critical components
            until they are needed.
          </p>
          <p className="pt-3">
            <FontAwesomeIcon icon={faHandPointRight} className="mr-2" />
            Minimize the use of external libraries and dependencies, as they can
            add additional overhead to the app.
          </p>

          <p className="pt-3">
            <FontAwesomeIcon icon={faHandPointRight} className="mr-2" />
            Use the React Profiler tool to identify and optimize performance
            bottlenecks in the app.
          </p>

          <p className="pt-3">
            <FontAwesomeIcon icon={faHandPointRight} className="mr-2" />
            Use server-side rendering to improve the initial load time of the
            app.
          </p>
          <p className="pt-3">
            <FontAwesomeIcon icon={faHandPointRight} className="mr-2" />
            Optimize images and other assets for web performance by compressing
            them and reducing their size.
          </p>

          <p className="pt-3">
            <FontAwesomeIcon icon={faHandPointRight} className="mr-2" />
            Use the browser's caching mechanisms to reduce the number of
            requests made to the server.
          </p>
        </div>
      </div>

      <div tabIndex={1} className="collapse mb-4">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-info peer-checked:bg-info ">
          <span>
            {" "}
            2. What are the different ways to manage a state in a React
            application?{" "}
          </span>{" "}
          <FontAwesomeIcon icon={faAngleDown} />
        </div>
        <div className="collapse-content bg-info text-primary-content peer-checked:bg-info peer-checked:text-primary-content border-t-2">
          <p className="pt-3">
            {" "}
            <FontAwesomeIcon icon={faHandPointRight} className="mr-2" /> Using
            stateful class components: Stateful class components use the
            constructor method to initialize state and update it using the
            setState() method.
          </p>

          <p className="pt-3">
            {" "}
            <FontAwesomeIcon icon={faHandPointRight} className="mr-2" />
            Using functional components with useState hook: Functional
            components can use the useState() hook to manage state. This hook
            allows you to add state to a functional component without having to
            convert it to a class.{" "}
          </p>

          <p className="pt-3">
            {" "}
            <FontAwesomeIcon icon={faHandPointRight} className="mr-2" />
            Using Context API: The Context API allows you to pass data down the
            component tree without having to pass props down through each level
            of the tree. This can be useful for managing global state in your
            application.
          </p>
          <p className="pt-3">
            {" "}
            <FontAwesomeIcon icon={faHandPointRight} className="mr-2" />
            Using Redux: Redux is a state management library that provides a
            centralized store for managing the state of an application. With
            Redux, you can manage the state of your application in a predictable
            and scalable way.
          </p>

          <p className="pt-3">
            {" "}
            <FontAwesomeIcon icon={faHandPointRight} className="mr-2" />
            Using React Query: React Query is a library that provides a simple
            and powerful way to manage server-state and cache in React
            applications.
          </p>
        </div>
      </div>

      <div tabIndex={2} className="collapse mb-4">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-info peer-checked:bg-info ">
          <span>3. How does prototypical inheritance work?</span>
          <FontAwesomeIcon icon={faAngleDown} />
        </div>
        <div className="collapse-content bg-info text-primary-content peer-checked:bg-info peer-checked:text-primary-content border-t-2">
          <p className="pt-3">
            Prototypical inheritance is a mechanism for objects to inherit
            properties and methods from their parent objects or prototypes
          </p>

          <p className="pt-3">
            Every object in JavaScript has a prototype object. When we create an
            object using a constructor function or an object literal, its
            prototype is automatically set to the Object prototype. When we
            access a property or method on an object, JavaScript first looks for
            that property or method on the object itself. If it doesn't find it,
            it looks for it on the object's prototype. If it still doesn't find
            it, it looks for it on the prototype's prototype, and so on, until
            it reaches the top of the prototype chain. If a property or method
            is found on a prototype, it is inherited by the object. This means
            that the object can access the property or method as if it were its
            own.
          </p>
        </div>
      </div>

      <div tabIndex={3} className="collapse mb-4">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-info peer-checked:bg-info ">
          <span>
            4. Why you do not set the state directly in React. For example, if
            you have const [products, setProducts] = useState([]). Why you do
            not set products = [...] instead, you use the setProducts().
          </span>
          <FontAwesomeIcon icon={faAngleDown} />
        </div>
        <div className="collapse-content bg-info text-primary-content peer-checked:bg-info peer-checked:text-primary-content border-t-2">
          <p className="pt-3">
            In React, it is not recommended to set state directly using the
            state variable. You should use the setProducts() function to update
            the state.{" "}
          </p>

          <p className="pt-3">
            React uses the setProducts() function to trigger a re-render of the
            component when the state changes. If you set products directly,
            React will not be aware that the state has changed, and the
            component will not re-render.
          </p>

          <p className="pt-3">
            Directly setting state can cause unexpected behavior and bugs in
            your application. For example, if you have multiple state variables
            that depend on each other, setting one variable directly can cause
            the other variables to become out of sync.
          </p>
        </div>
      </div>

      <div tabIndex={4} className="collapse mb-4">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-info peer-checked:bg-info ">
          <span>
            5. You have an array of products. Each product has a name, price,
            description, etc. How will you implement a search to find products
            by name?
          </span>
          <FontAwesomeIcon icon={faAngleDown} />
        </div>
        <div className="collapse-content bg-info text-primary-content peer-checked:bg-info peer-checked:text-primary-content border-t-2">
          <p className="pt-3">
            <code>
              {`products.filter(product =>
                {
                  product.name.toLowerCase().includes(searchQuery.toLowerCase());
                }
                )`}
            </code>
          </p>
        </div>
      </div>

      <div tabIndex={5} className="collapse mb-4">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-info peer-checked:bg-info ">
          <span>6. What is a unit test? Why should write unit tests?</span>
          <FontAwesomeIcon icon={faAngleDown} />
        </div>
        <div className="collapse-content bg-info text-primary-content peer-checked:bg-info peer-checked:text-primary-content border-t-2">
          <p className="pt-3">
            A unit test is a type of automated test that checks the correctness
            of a small piece of code, such as a function or class. It is written
            by developers and helps catch bugs early, provides confidence when
            refactoring, improves code quality, serves as documentation, and
            improves collaboration among developers.
          </p>

          <p className="pt-3">
            Unit tests help catch bugs early, provide confidence when
            refactoring, improve code quality, serve as documentation, and
            improve collaboration among developers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
