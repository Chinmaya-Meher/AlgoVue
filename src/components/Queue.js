import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import "../css/queue.css";
import { useState } from "react";
import Queuepage from "../sorting/queuebars";

export default function Queue() {
  const [arr,setArr]=useState([]);
  const [input,setInput]=useState("");
  const [rear,setRear]=useState(-1);
  const [front,setFront]=useState(-1);
  const [message,setMessage]=useState("");
  const MAX=8;
  const handleEnqueue=()=>{
    if (input.trim() === "") {
    setMessage("Enter number first");
    return;
    }

    let value=Number(input)
    if(isNaN(value))
    {
      setMessage("Enter number as input");
      return;
    }
    if(arr.length==MAX)
    {
      setMessage("Queue full")
      return;
    }
    if(arr.length==0)
    {
      setRear(0);
      setFront(0);
      setArr((prev)=>[...prev,value])
    }
    else{
    setRear((rear)=>rear+1);
    setArr((prev)=>[...prev,value])
    
    setMessage(`${value} is Enqueued into the Queue`)
    }
    setInput("");
  }

 const handleDequeue = () => {
  if (arr.length === 0) {
    setMessage("Queue Empty");
    return;
  }
  const removedElement=arr[0];
  const newArr = arr.slice(1);
  setArr(newArr);

  if (newArr.length === 0) {
    setFront(-1);
    setRear(-1);
  } else {
    setFront(0);
    setRear(newArr.length - 1);
  }

  setMessage(` ${removedElement} Element Dequeued`);
 };



 const handleUnderflow=()=>{
  if(arr.length==0)
  {
    setMessage("Queue Empty. Underflow Condition")
    return;
  }
  else
  {
    setMessage("Queue not Empty")
    return;
  }
 }

 const handleOverflow=()=>{
  if(arr.length==MAX)
  {
    setMessage("Queue Full. Overflow Condition")
    return;
  }
  else
  {
    setMessage("Queue not Full")
    return;
  }
 }

 const handleClear=()=>{
  setArr((prev)=>[]);
  setMessage("Queue Cleared")
  return;
 }

return (
  <>
    <div className="queue-page">
      
      {/* ---------- LEFT CONTAINER ---------- */}
      <div className="queue-page-left">
        <div className="queue-page-left-innerbox">
          
          {/* ---------- HEADINGS ---------- */}
          <div className="queue-page-headings">
            <p className="queue-page-heading">Queue</p>
            <p className="queue-page-desc">
              Queue is a linear data structure that follows the FIFO (First In First Out) principle.
              This means the first element inserted into the queue is the first one to be removed.
              All operations such as enqueue (inserting an element), dequeue (removing the front element).
            </p>
            <p className="queue-complexity">
              Time Complexity: O(1)
            </p>
          </div>

          {/* ---------- INPUT + BUTTON ---------- */}
          <div className="queue-page-buttons">
            <button className="queue-btn" onClick={()=>handleEnqueue()}>Enqueue</button>
            <button className="queue-btn" onClick={()=>handleDequeue()} >Dequeue</button>
            

            <input
              className="queue-input-box"
              placeholder="Enter element to be inserted into the queue..."
              onChange={(e) => {
                setInput(e.target.value);
              }}
              value={input}
            />
          </div>

          <div className="queue-page-buttons">
            <button className="queue-btnxl" onClick={()=>handleUnderflow()}>IsEmpty (Underflow)</button>
            <button className="queue-btnxl" onClick={()=>handleOverflow()}>IsFull (Overflow)</button>
            <button className="queue-btn clear" onClick={()=>handleClear()}>Clear</button>
          </div>

          <p
            style={{
              marginTop: "6px",
              fontSize: "14px",
              color: "#cfcfcf",
              opacity: 0.85
            }}
          >
            ℹ️ The max size of this queue is 8
          </p>

          {/* ---------- STEPS SECTION ---------- */}
          <div className="queue-page-steps">
            <div className="queue-stepbox">
              <h2>Front Index:{front} </h2>
              <h2>Rear Index:{rear} </h2>
              <h2>{message}</h2>
            </div>
          </div>

        </div>
      </div>

      {/* ---------- RIGHT CONTAINER ---------- */}
      <div className="queue-page-right">
        <div className="queue-page-right-innerbox">
          <div className="queue-container">
            <Queuepage arr={arr}/>
          </div>
        </div>
      </div>

    </div>
  </>
);

}
