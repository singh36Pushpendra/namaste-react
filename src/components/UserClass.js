import React from "react";

// To make a class based component
// we should extend React.Component
// Equivalent to User component.
// Loading a class based component = creating a new instance of this class.
class UserClass extends React.Component {
  constructor(props) {
    // Question: Why do we write super(props) ?
    // This is the best place to receive props and create state variables.
    super(props);
    this.state = {
      count: 0,
      count2: 0,
      count3: 0,
      count4: 0,
    };
    console.log(props);
  }
  render() {
    const { name, location } = this.props;
    const { count, count2 } = this.state;
    return (
      <div className="user-card">
        {/* Always have to use this keyword */}
        <h1>Count: {count}</h1>
        <h1>Count2: {count2}</h1>
        <button
          onClick={() => {
            // Never updates state variable directly.
            this.setState({
              // pass object here which contains the update value of the variable
              count: this.state.count + 1,
              count2: this.state.count2 + 1,
            });
          }}
        >
          Increase Count
        </button>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: singh36Pushpendra</h4>
      </div>
    );
  }
}
export default UserClass;
