import FeedbackCard from "./FeedbackCard";

function FeedbackList({ feedbacks }) {

  return (
    <div className="dashboard">

      <h2>Submitted Feedback</h2>

      {feedbacks.length === 0}

      {feedbacks.map((item, index) => (
        <FeedbackCard key={index} data={item} />
      ))}

    </div>
  );
}

export default FeedbackList;