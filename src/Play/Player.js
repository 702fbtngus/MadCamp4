import React, { useState, useEffect } from "react";
import SpotifyPlayer from "react-spotify-web-playback";

export default function Player({ accessToken, trackUri, index }) {
  const [play, setPlay] = useState(false);

  useEffect(() => setPlay(true), trackUri);

  if (!accessToken) return null;
  return (
    <div>
      <SpotifyPlayer
        token={accessToken}
        showSaveIcon
        callback={(state) => {
          if (!state.isPlaying) setPlay(false);
        }}
        play={play}
        uris={trackUri ? trackUri : []}
        offset={index}
        styles={{
          activeColor: "#fff",
          bgColor: "#0a0e11",
          color: "#fff",
          loaderColor: "#fff",
          sliderColor: "#1cb954",
          trackArtistColor: "#ccc",
          trackNameColor: "#fff",
          height: "12%",
        }}
      />
    </div>
  );
}
