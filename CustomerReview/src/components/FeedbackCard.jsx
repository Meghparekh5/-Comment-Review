function FeedbackCard({ data }) {

  return (
    <div className="card">

      <h3>{data.name}</h3>
      <p>{data.email}</p>

      <span className="badge">{data.category}</span>
      <span className="priority">{data.priority}</span>

      <p>{data.description}</p>

      <p className="date">{data.date}</p>

    </div>
  );
}

export default FeedbackCard;