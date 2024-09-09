import React from "react";
import { useState, useEffect } from "react";
export const useTimeOut = () => {
  const Message = ({ variant, children }) => {
    const [show, setShow] = useState(true);

    // On componentDidMount set the timer
    useEffect(() => {
      const timeId = setTimeout(() => {
        // After 3 seconds set the show value to false
        setShow(false);
      }, 3000);

      return () => {
        clearTimeout(timeId);
      };
    }, []);

    // If show is false the component will return null and stop here
    if (!show) {
      return null;
    }
  };
  return show;
};
