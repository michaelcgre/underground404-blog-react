import React from "react";
import MusicReviews from "../components/MusicReviews";

const musicReviewPage = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h1 className="mb-5 mt-4">Music Reviews</h1>
      <MusicReviews />
    </div>
  );
};

export default musicReviewPage;
