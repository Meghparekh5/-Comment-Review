import { useState } from "react";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import "../src/App.css";

function App() {

  const [feedbacks, setFeedbacks] = useState([]);

  const addFeedback = (data) => {
    setFeedbacks([data, ...feedbacks]);
  };

  return (
    <div className="container">

      <h1 className="title">Customer Feedback System</h1>

      <FeedbackForm addFeedback={addFeedback} />

      <FeedbackList feedbacks={feedbacks} />

    </div>
  );
}

export default App;