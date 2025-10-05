import React, { useState } from "react";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import Card from "./components/Card";

function App() {
  const [feedbacks, setFeedbacks] = useState([]);

  const addFeedback = (newFeedback) => {
    setFeedbacks((prev) => [newFeedback, ...prev]);
  };

  return (
    <div style={{ maxWidth: "500px", margin: "0 auto", padding: "20px" }}>
      <Card>
        <h2 style={{ textAlign: "center" }}>Feedback App</h2>
      </Card>

      <FeedbackForm onAdd={addFeedback} />
      <FeedbackList feedbacks={feedbacks} />
    </div>
  );
}

// commiting directly on main branch


export default App;
