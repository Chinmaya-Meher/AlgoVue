import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import "../css/stack.css";
import { useState } from "react";
import Stackpage from "../sorting/stackbars";
export default function Stack() {
  const[arr,setArr]=useState([]);
  const[input,setInput]=useState("");
  const [tos,setTos]=useState(arr.length-1)
  const [isPeeking,setIsPeeking]=useState(false)
  const [message,setMessage]=useState("")

  const handlePush = () => {
  if (input.trim() === "") {
    setMessage("Please enter a value to push.");
    return;
  }

  if (arr.length >= 10) {
    setMessage("Stack Overflow! Cannot push more elements.");
    return;
  }

  const value = Number(input);

  if (isNaN(value)) {
    setMessage("Only numeric values are allowed.");
    return;
  }

  setArr((prev) => [...prev, value]);
  setTos((prevTos) => prevTos + 1);
  setMessage(`${value} is pushed into the stack`);
  setInput("");
};



const handlePop = () => {
  if (tos === -1) {
    setMessage("Stack Underflow! Nothing to pop.");
    return;
  }

  const poppedValue = arr[tos];

  setArr((prev) => prev.slice(0, -1));
  setTos((prevTos) => prevTos - 1);
  setMessage(`${poppedValue} is popped out of the stack`);
};


const handlePeek=()=>{
  if(tos==-1)
  {
    setMessage("Stack empty. Nothing to peek")
    return;
  }
  else
  {
    setIsPeeking(true)
    setMessage(`${tos} is the Top element `)
    setTimeout(()=>{
      setIsPeeking(false)
    },800)
  }
}

const handleClear = () => {
  if (arr.length === 0) {
    setMessage("Stack is already empty.");
    return;
  }

  setArr([]);
  setTos(-1);
  setMessage("Stack cleared successfully.");
};



const handleIsEmpty = () => {
  if (tos === -1) {
    setMessage("Stack is Empty (Underflow Condition)");
  } else {
    setMessage("Stack is NOT Empty");
  }
};
const handleIsFull = () => {
  if (arr.length === 10) {
    setMessage("Stack is Full (Overflow Condition)");
  } else {
    setMessage("Stack is NOT Full");
  }
};


  return (
    <>
      <div className="stack-page">
        
        {/* ---------- LEFT CONTAINER ---------- */}
        <div className="stack-page-left">
          <div className="stack-page-left-innerbox">
            
            {/* ---------- HEADINGS ---------- */}
            <div className="stack-page-headings">
              <p className="stack-page-heading">Stack</p>
              <p className="stack-page-desc">
                Stack is a linear data structure that follows the LIFO (Last In First Out) principle. This means the last element inserted into the stack is the first one to be removed. All operations such as push (inserting an element), pop (removing the top element), and peek (viewing the top element) occur only at one end called the top of the stack.
              </p>
              <p className="stack-complexity">
                Time Complexity: O(1)
              </p>
            </div>

            {/* ---------- INPUT + BUTTON ---------- */}
            <div className="stack-page-buttons">
              <button className="stack-btn" onClick={handlePush}>Push</button>
              <button className="stack-btn"onClick={handlePop}>Pop</button>
              <button className="stack-btn" onClick={handlePeek}>Peek</button>
              <button className="stack-btn" onClick={handleClear}>Clear</button>
            
              <input
                className="stack-input-box"
                placeholder="Enter element to be pushed into the stack..."
                onChange={(e)=>{
                  setInput(e.target.value)
                }}
                value={input}

              />
              
            </div>
            <div className="stack-page-buttons">
              <button className="stack-btnxl" onClick={handleIsEmpty}>IsEmpty(Underflow)</button>
              <button className="stack-btnxl" onClick={handleIsFull}>IsFull(Overflow)</button></div>
              <p
            style={{
              marginTop: "6px",
              fontSize: "14px",
              color: "#cfcfcf",
              opacity: 0.85
            }}
          >
            ℹ️ The max size of this stack is 10
          </p>


            
            {/* ---------- STEPS SECTION ---------- */}
            <div className="stack-page-steps">
              <div className="stack-stepbox">
                <h2>Top Element: {tos}</h2>
                <h2>{message}</h2>
              </div>
            </div>

          </div>
        </div>

        {/* ---------- RIGHT CONTAINER ---------- */}
        <div className="stack-page-right">
          <div className="stack-page-right-innerbox">
            <div className="stack-container">
              <Stackpage arr={arr} tos={tos} isPeeking={isPeeking} />
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
