import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import "../css/queue.css";
import { useState } from "react";
import Queuepage from "../sorting/queuebars";

export default function DEQueue() {
  const [arr,setArr]=useState([]);
  const [input,setInput]=useState("");
  const [rear,setRear]=useState(-1);
  const [front,setFront]=useState(-1);
  const [message,setMessage]=useState("");
  const MAX=8;

  const handleEnqueueFront = () => {
    if (input.trim() === "") {
      setMessage("Enter number first");
      return;
    }

    const value = Number(input);
    if (isNaN(value)) {
      setMessage("Enter number as input");
      return;
    }

    if (arr.length === MAX) {
      setMessage("Queue Full");
      return;
    }

    const newArr = [value, ...arr];
    setArr(newArr);

    
      setFront(0);
      setRear(newArr.length - 1);
  

    setMessage(`${value} is Enqueued into the Queue`);
    setInput("");
  };

  const handleEnqueueRear = () => {
    if (input.trim() === "") {
      setMessage("Enter number first");
      return;
    }

  const value = Number(input);
    if (isNaN(value)) {
      setMessage("Enter number as input");
      return;
    }

    if (arr.length === MAX) {
      setMessage("Queue Full");
      return;
    }

    const newArr = [...arr, value];
    setArr(newArr);

   
      setFront(0);
      setRear(newArr.length - 1);
 

    setMessage(`${value} is Enqueued into the Queue`);
    setInput("");
  };

  const handleDequeueRear = () => {
    if (arr.length === 0) {
      setMessage("Queue Empty");
      return;
    }

    const removedElement = arr[arr.length - 1];
    const newArr = arr.slice(0, -1);
    setArr(newArr);

    if (newArr.length === 0) {
      setFront(-1);
      setRear(-1);
    } else {
      setFront(0);
      setRear(newArr.length - 1);
    }

    setMessage(`${removedElement} Element Dequeued`);
  };

  const handleDequeueFront = () => {
    if (arr.length === 0) {
      setMessage("Queue Empty");
      return;
    }

    const removedElement = arr[0];
    const newArr = arr.slice(1);
    setArr(newArr);

    if (newArr.length === 0) {
      setFront(-1);
      setRear(-1);
    } else {
      setFront(0);
      setRear(newArr.length - 1);
    }

    setMessage(`${removedElement} Element Dequeued`);
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
            <p className="queue-page-heading">Double Ended Queue</p>
            <p className="queue-page-desc">
              Deque (Double Ended Queue) is a linear data structure that allows insertion and deletion of elements from both ends. Unlike a normal queue that follows the FIFO (First In First Out) principle, a deque provides more flexibility by allowing elements to be added or removed from either the front or the rear. 
            </p>
            <p className="queue-complexity">
              Time Complexity: O(1)
            </p>
          </div>

          {/* ---------- INPUT + BUTTON ---------- */}
          <div className="queue-page-buttons">
            <button className="queue-btn"onClick={()=>handleEnqueueFront()}>Enqueue Front</button>
            <button className="queue-btn"onClick={()=>handleEnqueueRear()} >Enqueue Rear</button>
            

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
            <button className="queue-btn"onClick={()=>handleDequeueFront()}>Dequeue Front</button>
            <button className="queue-btn"onClick={()=>handleDequeueRear()} >Dequeue Rear</button>
          </div>
          <div className="queue-page-buttons">
            <button className="queue-btnxl" onClick={()=>handleUnderflow()} >IsEmpty (Underflow)</button>
            <button className="queue-btnxl"onClick={()=>handleOverflow()} >IsFull (Overflow)</button>
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
          <div className="queue-page-steps ">
            <div className="dequeue-stepbox">
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