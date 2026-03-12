import { useState } from "react";

function FeedbackForm({ addFeedback }) {

  const [form, setForm] = useState({
    name: "",
    email: "",
    category: "",
    priority: "",
    description: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {

    let newErrors = {};

    if (!form.name) newErrors.name = "Name required";
    if (!form.email.includes("@")) newErrors.email = "Valid email required";
    if (!form.category) newErrors.category = "Select category";
    if (!form.priority) newErrors.priority = "Select priority";
    if (form.description.length < 10)
      newErrors.description = "Minimum 10 characters";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if (!validate()) return;

    const feedbackData = {
      ...form,
      date: new Date().toLocaleString()
    };

    addFeedback(feedbackData);

    setForm({
      name: "",
      email: "",
      category: "",
      priority: "",
      description: ""
    });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>

      <input
        name="name"
        placeholder="Full Name"
        value={form.name}
        onChange={handleChange}
        className={errors.name ? "error" : ""}
      />
      <p className="errorText">{errors.name}</p>

      <input
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        className={errors.email ? "error" : ""}
      />
      <p className="errorText">{errors.email}</p>

      <select
        name="category"
        value={form.category}
        onChange={handleChange}
      >
        <option value="">Select Category</option>
        <option>Bug</option>
        <option>Suggestion</option>
        <option>Complaint</option>
        <option>Other</option>
      </select>

      <select
        name="priority"
        value={form.priority}
        onChange={handleChange}
      >
        <option value="">Priority</option>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>

      <textarea
        name="description"
        placeholder="Description"
        value={form.description}
        onChange={handleChange}
        className={errors.description ? "error" : ""}
      />
      <p className="errorText">{errors.description}</p>

      <button type="submit">Submit Feedback</button>

    </form>
  );
}

export default FeedbackForm;