import React from "react";

export default function Queuepage({ arr, front, rear, MAX }) {

  const radius = 190;     // increased from 140
  const center = 260;     // adjusted center
  const nodeSize = 85;    // bigger nodes

  return (
    <div
      style={{
        position: "relative",
        width: "520px",
        height: "520px",
        margin: "auto"
      }}
    >

      {/* Outer Ring */}
      <div
        style={{
          position: "absolute",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          border: "2px dashed #6C63FF",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          opacity: 0.4
        }}
      />

      
      {Array.from({ length: MAX }).map((_, index) => {

        const angle = (2 * Math.PI * index) / MAX;

        const x = center + radius * Math.cos(angle) - nodeSize / 2;
        const y = center + radius * Math.sin(angle) - nodeSize / 2;

        const isFront = index === front;
        const isRear = index === rear;
        const hasValue = arr[index] !== null;

        return (
          <div key={index}>

            {/* Node */}
            <div
              style={{
                position: "absolute",
                left: `${x}px`,
                top: `${y}px`,
                width: `${nodeSize}px`,
                height: `${nodeSize}px`,
                borderRadius: "50%",
                background: isFront
                  ? "linear-gradient(135deg,#22c55e,#16a34a)"
                  : isRear
                  ? "linear-gradient(135deg,#3b82f6,#2563eb)"
                  : hasValue
                  ? "linear-gradient(135deg,#6C63FF,#9B7FFF)"
                  : "#2e3241",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontWeight: "bold",
                fontSize: "20px",
                boxShadow: isFront
                  ? "0 0 20px rgba(34,197,94,0.9)"
                  : isRear
                  ? "0 0 20px rgba(59,130,246,0.9)"
                  : "0 6px 16px rgba(0,0,0,0.4)",
                transition: "all 0.3s ease"
              }}
            >
              {hasValue ? arr[index] : ""}
            </div>

            {/* Index Label */}
            <div
              style={{
                position: "absolute",
                left: `${x + nodeSize / 2 - 6}px`,
                top: `${y + nodeSize + 10}px`,
                fontSize: "13px",
                color: "#b0b3c0"
              }}
            >
              {index}
            </div>

            

          </div>
        );
      })}
    </div>
  );
}