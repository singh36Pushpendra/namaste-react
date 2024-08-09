import React from "react";
import ReactDOM from "react-dom/client";
/**
 * ReactElement(Object) => HTML(Browser Understands)
 *
 * Convert third argument to array if siblings elements
 */
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "This is Namaste react"),
    React.createElement("h2", {}, "I am an h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am an h1 tag"),
    React.createElement("h2", {}, "I am an h2 tag"),
  ]),
]);
// jsx that exists

// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Hello world from React!"
// );
console.log(parent); // object
const root = ReactDOM.createRoot(document.getElementById("header"));
root.render(parent); // replaced by this, whatever exist inside 'root'
