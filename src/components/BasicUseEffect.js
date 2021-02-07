import React, { useState, useEffect } from "react";

const BasicUseEffect = () => {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState("");

  useEffect(() => {
    console.log("useEffect invoked");
  }, [count]);

  return (
    <>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Click {count}
      </button>
      <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
    </>
  );
};

export default BasicUseEffect;
