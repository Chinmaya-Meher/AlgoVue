import ReactDOM from "react-dom/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import Bars from "../sorting/bar";
import { useState,useRef } from "react";
import bubbleSort from "../logics/bubblesortlogic";
export default function Bubblesort(){


const[arr,setArr]=useState([298,120,243,264,254,345,199,243,233])
const[input,setInput]=useState("");
const[speed,setSpeed]=useState(3);
const[isSorting,setIsSorting]=useState(false);
const[steparr,setSteparr]=useState([])
const orignalArr=useRef([]);
// 🔴 NEW: animation state (ONE FRAME of animation)
  const [animationState, setAnimationState] = useState({
    activeIndices: [],
    action: null
  });

const handleRandomArray= ()=>{
  const randArr=Array.from({length:9},()=>
    Math.floor(Math.random()*500))
  setArr(randArr)
}



const handleInputArray=()=>{
  const inputarr=input.split(",").map(num=>Number(num.trim())).filter(num=>!isNaN(num)&&num>0)
  setArr(inputarr)
}

const animateSort = (getAnimations) => {
  if (isSorting) return;

  orignalArr.current = [...arr];
  setIsSorting(true);//avoids bugs on multiple clicking play btn

  const animations = getAnimations(arr);
  let tempArr = [...arr];

  animations.forEach((step, index) => {
    setTimeout(() => {

      // 🔹 1. UPDATE VISUAL STATE (for coloring)
      setAnimationState({
        activeIndices: step.indices,
        action: step.type
      });

      // 🔹 2. PERFORM DATA CHANGE (only for swap)
      if (step.type === "swap") {
        const [i, j] = step.indices;

        let temp = tempArr[i];
        tempArr[i] = tempArr[j];
        tempArr[j] = temp;

        setArr([...tempArr]);
      }

      // 🔹 3. CLEANUP AFTER LAST STEP
      if (index === animations.length - 1) {
        setTimeout(() => {
          setAnimationState({ activeIndices: [], action: null });
          setIsSorting(false);
        }, (6 - speed) * 250);
      }

    }, index * (6 - speed) * 250);
  });
};


const handleMessage=(condition,indexes)=>{
  const[a,b]=indexes;
  if(condition=="swap")
  {
    
    steparr.push(`${arr[a]} at index ${a} and ${arr[b]} at index ${b} are swapped`)
    console.log(steparr);
    return(`${arr[a]} at index ${a} and ${arr[b]} at index ${b} are swapped`);
  } 
}  


    return(
        <>
        <div className="sorting-page">
        {/* ---------- LEFT CONTAINER ---------- */}
        <div className="sorting-page-left">
          <div className="sorting-page-left-innerbox">
            {/* ---------- HEADINGS ---------- */}
            <div className="sorting-page-headings">
              <p className="sorting-page-heading">Bubble Sort</p>
              <p className="sorting-page-desc">
                Bubble Sort works by repeatedly comparing adjacent elements in a
                list and swapping them if they are in the wrong order. This
                process is repeated until the list is sorted.
              </p>
              <p className="complexity" style={{fontSize: "20px", color: "white"}}>Time Complexity: O(n<sup>2</sup>)</p>
            </div>
            
            {/* ---------- INPUT + BUTTON ---------- */}
            <div className="sorting-page-buttons">
              <button className="generate" onClick={handleRandomArray}>Generate Random</button>
              <button className="generate" onClick={handleInputArray}>Generate</button>
              <input
                className="input-box"
                value={input}
                placeholder="Enter elements separated by ','"
                onChange={(e)=>{setInput(e.target.value)}}
              />
            </div>

            {/* ---------- SPEED SECTION ---------- */}
            <div className="sorting-page-speed">
              <p style={{fontSize: "18px"}}>Speed</p>
              <input type="range"min="1"max="5" defaultValue="3" onChange={(e)=>setSpeed(Number(e.target.value))} className="speed-slider"/>
              <div className="speed-btn">
                <FontAwesomeIcon icon={fas.faPlay} onClick={() => animateSort(bubbleSort)} className="speed-icons" />
                <FontAwesomeIcon icon={faRotateLeft} onClick={()=>setArr(orignalArr.current)} className="speed-icons"/>
              </div>
            </div>

            {/* ---------- STEPS SECTION ---------- */}
            <div className="sorting-page-steps">
              
              <div className="stepbox">
                <h2>{`Currently involved indexes: ${animationState.activeIndices}`}</h2>
                <h2>{handleMessage(animationState.action,animationState.activeIndices)}</h2>
              </div>
      
            </div>
          </div>
        </div>

        {/* ---------- RIGHT CONTAINER ---------- */}
        <div className="sorting-page-right">
          <div className="sorting-page-right-innerbox">
            <div className="vizbars">
              <Bars arr={arr} animationState={animationState} />

            </div>
          </div>
        </div>
      </div>
        </>
    )
}