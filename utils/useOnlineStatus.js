// Thinking way for custom hook
// What should be the input, do we need any information
// output

import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  // check if online, window object contains event listener provided
  // by browser which keeps track of internet.

  const [onlineStatus, setOnlineStatus] = useState(true);
  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });
    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
  }, []);
  return onlineStatus;
};
export default useOnlineStatus;
