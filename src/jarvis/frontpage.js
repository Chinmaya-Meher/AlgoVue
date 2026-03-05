import "../css/jarvis.css";
import { useState, useRef, useEffect } from "react";


export default function JARVIS() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const chatEndRef = useRef(null);
  function formatJarvisText(text) {
  if (!text) return "";

  return text
    // Remove markdown headings
    .replace(/^#{1,6}\s*/gm, "")
    // Remove bold ** **
    .replace(/\*\*(.*?)\*\*/g, "$1")
    // Remove single *
    .replace(/\*(.*?)\*/g, "$1")
    // Remove backticks `
    .replace(/`/g, "")
    // Clean extra spaces
    .trim();
}
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = {
      role: "user",
      content: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("https://algovue-backend.onrender.com/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question: userMessage.content }),
      });

      const data = await response.json();

      const jarvisMessage = {
        role: "assistant",
        content: String(
          data?.answer || "Jarvis encountered an unexpected response."
        ),
      };

      setMessages((prev) => [...prev, jarvisMessage]);
    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Something went wrong." },
      ]);
    }

    setLoading(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="jarvis-page">
      <div className="jarvis-content">
        {messages.length === 0 && (
          <div className="jarvis-body">
            <div className="jarvis-text">
              <p className="jarvis-t1">JARVIS ONLINE</p>
              <p className="jarvis-t2">What are we learning today?</p>
            </div>
          </div>
        )}

        <div className="chat-container">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={
                msg.role === "user" ? "chat-user" : "chat-jarvis"
              }
            >
              {msg.role === "assistant" ? (
                <div className="jarvis-message">
                  <pre className="jarvis-output">
                    {formatJarvisText(String(msg.content || ""))}
                  </pre>
                </div>
              ) : (
                <div className="user-message">
                  {msg.content}
                </div>
              )}
            </div>
          ))}

          {loading && (
            <div className="jarvis-thinking">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          )}

          <div ref={chatEndRef}></div>
        </div>
      </div>

      <div className="search-section">
        <input
          type="text"
          className="search-bar"
          placeholder="Ask your question..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={loading}
        />
        <button
          className="submit-btn"
          onClick={handleSend}
          disabled={loading}
        >
          Submit
        </button>
      </div>
    </div>
  );
}