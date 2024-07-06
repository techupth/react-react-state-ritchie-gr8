import { useState } from "react";
import "./App.css";

function App() {
  const [content, setContent] = useState("Greeting Message");

  const messagesList = ["สวัสดี!", "Hi!", "你好!"];

  return (
    <div className="App">
      <div className="greeting-container">{content}</div>
      <div className="buttons">
        {messagesList.map((msg, idx) => (
          <button key={idx} onClick={() => setContent(msg)}>
            {msg}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
