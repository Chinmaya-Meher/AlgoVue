import React from "react";
import "../css/search.css";

export default function Searchingboxes({ arr, animationState }) {
  const { index = null, type = null } = animationState || {};

  return (
    <div className="search-bar-container">
      {arr.map((item, i) => (
        <div key={i} className="bar-wrapper">
          {/* Bar */}
          <div
            className={`searching-array ${
              i === index && type === "found" ? "found-bar" : ""
            }`}
            style={{
              width: "60px",
              height: `${item*0.7}px`,
              boxShadow:
                i === index
                  ? type === "checking"
                    ? "0 0 20px rgba(255, 217, 0, 0.8)"
                    : type === "missing"
                    ? "0 0 20px rgba(255, 51, 51, 0.9)"
                    : "none"
                  : "none",
            }}
          >
            {item}
          </div>

         
        </div>
      ))}
    </div>
  );
}
