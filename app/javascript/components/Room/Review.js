import React from "react";

const Review = ({review}) => {
  return (
    <div key={review.id}>
      <h3>{review.title}</h3>
      <p>{review.description}</p>
    </div>
  );
}

export default Review
