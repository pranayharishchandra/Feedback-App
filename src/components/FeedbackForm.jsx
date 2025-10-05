import React, { useState } from "react";
import Card from "./Card";

function FeedbackForm({ onAdd }) {
  const [formData, setFormData] = useState({
    rating: "",
    review: ""
  });

  const handleRatingChange = (value) => {
    setFormData((prev) => ({ ...prev, rating: value }));
  };

  const handleReviewChange = (e) => {
    setFormData((prev) => ({ ...prev, review: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.rating || !formData.review.trim()) {
      alert("Please select a rating and write a review!");
      return;
    }

    const newFeedback = {
      id: crypto.randomUUID(),
      rating: formData.rating,
      review: formData.review
    };

    onAdd(newFeedback);
    setFormData({ rating: "", review: "" });
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h3>How would you rate our service?</h3>
        <div style={{ margin: "8px 0" }}>
          {Array.from({ length: 10 }, (_, i) => (
            <button
              key={i + 1}
              type="button"
              value={i + 1}
              onClick={() => handleRatingChange(i + 1)}
              style={{
                margin: "3px",
                backgroundColor: formData.rating == i + 1 ? "lightgreen" : ""
              }}
            >
              {i + 1}
            </button>
          ))}
        </div>

        <textarea
          placeholder="Write your review..."
          value={formData.review}
          onChange={handleReviewChange}
          rows={4}
          cols={30}
          style={{ width: "100%", marginTop: "10px" }}
        />

        <button type="submit" style={{ marginTop: "10px" }}>
          Submit
        </button>
      </form>
    </Card>
  );
}

export default FeedbackForm;
