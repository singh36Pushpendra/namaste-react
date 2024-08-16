import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constructor");
  }
  componentDidMount() {
    // console.log("Parent Component Did Mount");
  }
  render() {
    // console.log("Parent Render");
    return (
      <div>
        <h1>About</h1>
        <h1>This is Namaste React Web Series</h1>
        {/* 
        When About Us page render,
        when it sees UserClass components,
        then it loads(instantiated) UserClass -> call constructor
        
        */}
        {/* Triggers UserClass(child) lifecycle methods */}
        <UserClass name="Pushpendra (Class)" location="Bengaluru (Class)" />
      </div>
    );
  }
}
export default About;
