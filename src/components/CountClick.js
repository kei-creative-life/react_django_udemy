import React from "react";

const CountClick = ({ handleClick, children }) => {
  console.log("clicked", children);
  return (
    <>
      <button onClick={handleClick}>{children}</button>
    </>
  );
};

export default React.memo(CountClick);
