import React from "react";

export const TryBar = () => {
  return (
    <div className="d-flex text-center">
      <h1 className="bg-black">Hello</h1>
      <h2
        className="cclip bg-warning"
        style={{ clipPath: "polygon(32% 0, 100% 0, 100% 100%, 0% 100%)" }}
      >
        How are you
      </h2>
    </div>
  );
};
