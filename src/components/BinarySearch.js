import React, { useState } from "react";
import "../css/search.css";
import Searchingboxes from "../sorting/searchdisplay";
import binarySearch from "../logics/binarysearchlogic";
import BinarySearchboxes from "../sorting/binarysearchdisplay";
export default function Binarysearch() {
  const [arr, setArr] = useState([120, 190, 243, 254, 264, 298, 345, 465]);
  const [animationState, setAnimationState] = useState({});
  const [target, setTarget] = useState("");
  const [input, setInput] = useState("");
  const [speed, setSpeed] = useState(3);
  const [discarded, setDiscarded] = useState(new Set());
  const [message,setMessage]=useState("Click Search to start");

  /* ---------- RANDOM ARRAY ---------- */
  const handleRandomArray = () => {
    const randArr = Array.from({ length: 10 }, () =>
      Math.floor(Math.random() * 500)
    ).sort((a, b) => a - b);

    setArr(randArr);
    setAnimationState({});
  };

  /* ---------- MANUAL INPUT ---------- */
  const handleInputArray = () => {
    const inputarr = input
      .split(",")
      .map(num => Number(num.trim()))
      .filter(num => !isNaN(num))
      .sort((a, b) => a - b);

    setArr(inputarr);
    setAnimationState({});
  };

  const handleSearch = () => {
  if (!target) return;

  setAnimationState({});
  setDiscarded(new Set());
  setMessage("Binary Search started...");

  const animations = binarySearch(arr, Number(target));

  animations.forEach((step, i) => {
    setTimeout(() => {
      setAnimationState(step);

      if (step.type === "checking") {

        setMessage(
          `Checking middle index ${step.index} (value: ${arr[step.index]})`
        );

        setDiscarded(prev => {
          const newSet = new Set(prev);
          for (let j = 0; j < arr.length; j++) {
            if (j < step.left || j > step.right) {
              newSet.add(j);
            }
          }
          return newSet;
        });
      }

      else if (step.type === "found") {
        setMessage(`Element found at index ${step.index}`);
      }

      else if (step.type === "missing") {
        setMessage("Element not found in array");
      }

    }, i * (6 - speed) * 350);
  });
};

  return (
    <div className="searching-page">
      {/* ---------- LEFT ---------- */}
      <div className="searching-page-left">
        <div className="searching-page-left-innerbox">
          <div className="searching-page-headings">
            <p className="searching-page-heading">Binary Search</p>

            <p className="searching-page-desc" style={{ fontSize: "18px" }}>
              Binary Search works by repeatedly dividing a sorted list into
              halves until the desired element is found or the search space
              becomes empty.
            </p>

            <p
              className="complexity"
              style={{ fontSize: "20px", color: "white" }}
            >
              Time Complexity: O(log n)
            </p>
          </div>

          <div className="searching-page-buttons">
            <button className="generate" onClick={handleRandomArray}>
              Generate Random
            </button>

            <button className="generate" onClick={handleInputArray}>
              Generate
            </button>

            <input
              className="search-input-box"
              placeholder="Enter elements separated by ','"
              onChange={(e) => setInput(e.target.value)}
            />
          
          </div>
          

          <div className="searching-page-speed">
              <p
            style={{
              marginTop: "6px",
              fontSize: "14px",
              color: "#cfcfcf",
              opacity: 0.85
            }}
          >
            ℹ️ Binary Search requires a sorted array. Input values are sorted automatically.
          </p>
            <p style={{ fontSize: "18px" }}>Speed</p>
            <input
              type="range"
              min="1"
              max="5"
              defaultValue="3"
              onChange={(e) => setSpeed(Number(e.target.value))}
              className="search-speed-slider"
            />
          </div>

          <div className="target-buttons">
            
            <input className="search-input-box"placeholder="Enter the target to be searched" onChange={(e) => setTarget(e.target.value)}/>

            <button className="generate" onClick={handleSearch}>
              Search
            </button>
          </div>
          <div className="searching-page-steps">
              
            <div className="target-stepbox">
              <h2>{message}</h2>
            </div>
                
          </div>
        </div>
      </div>

      {/* ---------- RIGHT ---------- */}
      <div className="searching-page-right">
        <div className="searching-page-right-innerbox">
          <BinarySearchboxes arr={arr} animationState={animationState} />
        </div>
      </div>
    </div>
  );
}
