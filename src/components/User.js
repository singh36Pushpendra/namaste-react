import { useEffect, useState } from "react";

// React uses a big one object and put all the object as in state variable of class based components.
const User = ({ name }) => {
  const [count] = useState(0);
  const [count2] = useState(1);

  useEffect(() => {
    // API calls
  }, []);
  return (
    <div className="user-card">
      <h1>Count = {count}</h1>
      <h1>Count = {count2}</h1>
      <h2>Name: {name}</h2>
      <h3>Location: Bengaluru</h3>
      <h4>Contact: singh36Pushpendra</h4>
    </div>
  );
};
export default User;
