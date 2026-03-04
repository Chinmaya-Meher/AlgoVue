import React from "react";

export default function Queuepage({ arr }) {
  return (
    <div className="queue-container">
      {arr.map((item, index) => (
        <div className="queue-item-wrapper" key={index}>
          
          {/* Index Label */}
          <div className="queue-index">
            {index}
          </div>

          {/* Queue Bar */}
          <div className="queue-bars">
            {item}
          </div>

        </div>
      ))}
    </div>
  );
}