import { useState } from "react";
import "../css/queue.css";
import Queuepage from "../sorting/cqueuebars";

export default function CircularQueue() {

  const MAX = 8;

  const [arr, setArr] = useState(new Array(MAX).fill(null));
  const [input, setInput] = useState("");
  const [rear, setRear] = useState(-1);
  const [front, setFront] = useState(-1);
  const [message, setMessage] = useState("");

  const isFull = () => (rear + 1) % MAX === front;
  const isEmpty = () => front === -1;

  const handleEnqueue = () => {
    if (input.trim() === "") {
      setMessage("Enter number first");
      return;
    }

    const value = Number(input);
    if (isNaN(value)) {
      setMessage("Enter number as input");
      return;
    }

    if (isFull()) {
      setMessage("Queue Full (Overflow)");
      return;
    }

    let newArr = [...arr];

    if (isEmpty()) {
      newArr[0] = value;
      setFront(0);
      setRear(0);
    } else {
      const newRear = (rear + 1) % MAX;
      newArr[newRear] = value;
      setRear(newRear);
    }

    setArr(newArr);
    setMessage(`${value} inserted at rear`);
    setInput("");
  };

  const handleDequeue = () => {
    if (isEmpty()) {
      setMessage("Queue Empty (Underflow)");
      return;
    }

    let newArr = [...arr];
    const removed = newArr[front];
    newArr[front] = null;

    if (front === rear) {
      setFront(-1);
      setRear(-1);
    } else {
      setFront((front + 1) % MAX);
    }

    setArr(newArr);
    setMessage(`${removed} removed from front`);
  };

  const handleUnderflow = () => {
    setMessage(isEmpty() ? "Queue Empty. Underflow Condition" : "Queue not Empty");
  };

  const handleOverflow = () => {
    setMessage(isFull() ? "Queue Full. Overflow Condition" : "Queue not Full");
  };

  const handleClear = () => {
    setArr(new Array(MAX).fill(null));
    setFront(-1);
    setRear(-1);
    setMessage("Queue Cleared");
  };

  return (
    <div className="queue-page">

      {/* LEFT PANEL */}
      <div className="queue-page-left">
        <div className="queue-page-left-innerbox">

          <div className="queue-page-headings">
            <p className="queue-page-heading">Circular Queue</p>
            <p className="queue-page-desc">
              Circular Queue is a linear data structure that follows FIFO (First In First Out) order. The last position is connected back to the first, forming a circle. This circular structure allows the queue to reuse empty spaces created after deletions, making better use of memory compared to a simple linear queue.
            </p>
            <p className="queue-complexity">
              Time Complexity: O(1)
            </p>
          </div>

          <div className="queue-page-buttons">
            <button className="queue-btn" onClick={handleEnqueue}>
              Enqueue
            </button>
            <button className="queue-btn" onClick={handleDequeue}>
              Dequeue
            </button>
            <input
              className="queue-input-box"
              placeholder="Enter element..."
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
          </div>
          <div className="queue-page-buttons">
            <button className="queue-btnxl" onClick={handleUnderflow}>
              IsEmpty (Underflow)
            </button>
            <button className="queue-btnxl" onClick={handleOverflow}>
              IsFull (Overflow)
            </button>
            <button className="queue-btn clear" onClick={handleClear}>
              Clear
            </button>
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

          <div className="queue-page-steps">
            <div className="dequeue-stepbox">
              <h2>Front Index: {front}</h2>
              <h2>Rear Index: {rear}</h2>
              <h2>{message}</h2>
            </div>
          </div>

        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="queue-page-right">
        <div className="queue-page-right-innerbox">
          <div className="queue-container">
            <Queuepage
              arr={arr}
              front={front}
              rear={rear}
              MAX={MAX}
            />
          </div>
        </div>
      </div>

    </div>
  );
}