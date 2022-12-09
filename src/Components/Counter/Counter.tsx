import React from "react";
import "./Counter.css";
import { Interface } from "../Interface/Interface";
import { Settings } from "../Settings/Settings";

// * Component
export const Counter = () => {
  // }

  // * Return
  return (
    <div className={"counter"}>
      <Settings />
      <Interface />
    </div>
  );
};
