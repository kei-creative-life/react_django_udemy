import React, { useState } from "react";
import Timer from "./Timer";

const TimerContainer = () => {
  const [display, setDisplay] = useState(true);
  return (
    <>
      <button onClick={() => setDisplay(!display)}>Switch Timer</button>
      {display && <Timer />}
    </>
  );
};

export default TimerContainer;
