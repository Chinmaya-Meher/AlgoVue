import React, { useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import "../css/search.css"
import Searchingboxes from "../sorting/searchdisplay";
import linearSearch from "../logics/linearsearchlogic";
export default function Linearsearch()
{
    const [arr,setArr]=useState([298,120,243,264,254,465,345,190])
    const[animationState,setAnimationState]=useState({})
    const [target,setTarget]=useState(null)
    const[input,setInput]=useState("");
    const[speed,setSpeed]=useState(3);
    const[message,setMessage]=useState("Click Search to start");




    const handleRandomArray= ()=>{
    const randArr=Array.from({length:10},()=>
      Math.floor(Math.random()*500))
    setArr(randArr)
    setAnimationState({});
    }

    const handleSearch=()=>{
      setAnimationState({});
      setMessage("Searching started...");

      let animations=linearSearch(arr,Number(target));

      animations.forEach((step,i) => {
        setTimeout(()=>{
          setAnimationState(step);

          if(step.type==="checking")
          {
            setMessage(`Checking index ${step.index} (value: ${arr[step.index]})`);
          }
          else if(step.type==="found")
          {
            setMessage(`Element found at index ${step.index}`);
          }
          else if(step.type==="missing")
          {
            setMessage(`Element not at index ${step.index}`);
          }
          else if(step.type==="not-found")
          {
            setMessage("Element not found");
          }
          

        },i * (6 - speed) * 300)
      });
    }


    const handleInputArray=()=>{
    const inputarr=input.split(",").map(num=>Number(num.trim())).filter(num=>!isNaN(num)&&num>0)
    setArr(inputarr)
    }

     return(
        <>
        <div className="searching-page">
                {/* ---------- LEFT CONTAINER ---------- */}
                <div className="searching-page-left">
                  <div className="searching-page-left-innerbox">
                    {/* ---------- HEADINGS ---------- */}
                        <div className="searching-page-headings">
                        <p className="searching-page-heading">Linear Search</p>
                        <p className="searching-page-desc" style={{fontSize: "18px"}}>
                            Linear Search works by checking each element in a list one by one until the desired element is found or the end of the list is reached.
                            This process continues sequentially, making it effective for small or unsorted lists.
                        </p>
                        <p className="complexity" style={{fontSize: "20px", color: "white"}}>Time Complexity: O(n)</p>
                        </div>
                        {/* ---------- INPUT + BUTTON ---------- */}
                        <div className="searching-page-buttons">
                            <button className="generate" onClick={handleRandomArray}>Generate Random</button>
                            <button className="generate" onClick={handleInputArray}>Generate</button>
                            <input onChange={(e)=>{setInput(e.target.value)}}
                                className="search-input-box"
                                placeholder="Enter elements separated by ','"/>
                        </div>
                             {/* ---------- SPEED SECTION ---------- */}
                        <div className="searching-page-speed">
                            <p style={{fontSize: "18px"}}>Speed</p>
                            <input type="range"min="1"max="5" defaultValue="3" onChange={(e)=>setSpeed(Number(e.target.value))} className="search-speed-slider"/>     
                               
                        </div>

                        <div className="target-buttons">
                          <input
                                className="search-input-box"
                                placeholder="Enter the target to be searched" onChange={(e)=>{setTarget(e.target.value)}}/>

                          <button className="generate" onClick={()=>handleSearch()} >Search</button>                                
                        </div>
                        <div className="searching-page-steps">
              
                        <div className="target-stepbox">
                          <h2>{message}</h2></div>

                
                      </div>


                    </div>
                </div>
        
                {/* ---------- RIGHT CONTAINER ---------- */}
                <div className="searching-page-right">
                  <div className="searching-page-right-innerbox">
                    <Searchingboxes arr={arr} animationState={animationState}/>
                  </div>
                </div>
        </div>
        </>
     )
}