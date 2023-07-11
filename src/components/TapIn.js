import React from "react";

const TapIn = () => {
  return (
    <div className="offset-1" lg="4" offset="2">
      <h4 className="text-end">Tap In</h4>
      <iframe
        title="tap-in-spotify"
        class="spotify"
        src="https://open.spotify.com/embed/artist/3Ps6le7tj5BdNtdnfNgTU4?utm_source=generator&theme=0"
        width="100%"
        height="352"
        frameborder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default TapIn;
