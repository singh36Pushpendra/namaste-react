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
      userInfo: {
        name: "Myname",
        location: "default",
      },
    };
    console.log(this.props.name + "Child Constructor");
  }

  // After updating the DOM and refs.
  // Called after mounting (after render method)
  // It is used to make API calls
  // Why?: Because after rendering only we wan't to call
  // React will batch the render phase, commit phase it do optimization.
  async componentDidMount() {
    console.log(this.props.name + "Child Component Did Mount");

    const data = await fetch("https://api.github.com/users/singh36Pushpendra");
    const json = await data.json();

    // after setting of state variable react triggers the render again
    // (triggers the reconciliation in update cycle)
    this.setState({
      userInfo: json,
    });
    console.log(json);
  }

  componentDidUpdate() {
    console.log(this.props.name + "Child component Did Update");
  }

  // Just before Unmount(When the component will disappear or removed from the page)
  componentWillUnmount() {
    console.log("Child component Will Unmount");
  }
  render() {
    console.log(this.props.name + "Child Render");
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        {/* Always have to use this keyword */}
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: singh36Pushpendra</h4>
      </div>
    );
  }
}
export default UserClass;
