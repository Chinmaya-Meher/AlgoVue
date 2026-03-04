import React from "react";

export default function Bars({ arr, animationState }) {

  // animationState tells us what is happening RIGHT NOW in the animation
  // activeIndices → which bars are involved in the current step
  // action → what those bars are doing (compare / swap / null)
  const { activeIndices = [], action = null } = animationState || {};

  return (
    <>
      <div className="barcontainer">
        {arr.map((item, index) => (
          <div className="bars" key={index}
            style={{
                    height: `${item}px`,width:"60px",
                    boxShadow:
                        activeIndices.includes(index)
                        ? action === "compare"
                            ? "0 0 20px rgba(255, 217, 0, 0.8)"   // soft yellow glow
                            : action === "swap"
                            ? "0 0 20px rgba(255, 51, 51, 0.9)"  // soft red glow
                            : "0 0 0 rgba(0,0,0,0)"
                        : "0 0 0 rgba(0,0,0,0)"
                    }}>
            {item}
          </div>
        ))}
      </div>
    </>
  );
}
