import React from "react";
import ArtistSpotlight from "../components/ArtistSpotlight";

const ArtistSpotlightPage = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h1 className="mb-5 mt-4">Artist Spotlight</h1>
      <ArtistSpotlight />
    </div>
  );
};

export default ArtistSpotlightPage;
