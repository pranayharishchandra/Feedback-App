import React from "react";
import Card from "./Card";

function FeedbackList({ feedbacks }) {
  if (feedbacks.length === 0) {
    return <p>No feedback yet 😔</p>;
  }

  return (
    <div>
      {feedbacks.map((item) => (
        <Card key={item.id}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h4>Rating: {item.rating}</h4>
            <p>{item.review}</p>
          </div>
        </Card>
      ))}
    </div>
  );
}

export default FeedbackList;
