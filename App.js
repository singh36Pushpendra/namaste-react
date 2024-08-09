import React from "react";
import ReactDOM from "react-dom/client";

// React Element

// React.createElement => object => when render then becomes => HTMLElement(render)
// const heading = React.createElement("h1", { id: "heading" }, "Namaste React"); // core

// console.log(heading);

// jsx (jsx is not html inside javascript)
// jsx is just HTML-like syntax

// Not pure javascript.(js engine will not understand this piece of code)
// Parcel is doing the job behind the scene
// JSX (transpiled before it reaches the JS Engine)
// Parcel gives responsibility to transpiled code to Babel.
// Babel - takes code and converts to a browser understandable code.
// JSX => React.createElement => ReactElement-JS Object => HTMLElement(render)
// attribue => class (html) == className (jsx)
// Use camel case for attributes in jsx
// It is required to wrap code in parentheses if we are writing jsx in multiple lines.
// React Element.
const heading = (
  <h1 className="head" tabIndex={5}>
    Namaste React using JSX
  </h1>
); // Created react element using jsx.

// React Component
// Class Based Component - OLD
// Functional Component - NEW

// React Functional Component
// A function which is returning a react element.

// jsx will sanitize data and then will run.
const data = 10000;

const elem = <span>React Element</span>;

const Title = () => (
  <h1 className="head" tabIndex={5}>
    {elem}
    Namaste react using JSX title
  </h1>
);

const HeadingComponent = () => {
  return (
    <div id="container">
      {/* Any js code or expression we can write inside curly braces. */}
      <h2>{data + 100}</h2>
      {/* Can invoke as a function */}
      {Title()}

      <Title />
      <Title></Title>
      <h2>{console.log("Pushpendra Singh")}</h2>
      <h1 className="heading">Namaste React Functional Component</h1>
    </div>
  );
};

console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading); // Rendering react element.

root.render(<HeadingComponent />);
