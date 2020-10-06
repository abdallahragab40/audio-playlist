import React, { useState, useRef } from "react";
import Track from "./track";

const Audio = (props) => {
  const [isPlaying, setIsPlaying] = useState("");
  const audioRef = useRef();

  const onTrackChange = (source) => {
    setIsPlaying(source);
    audioRef.current.pause();
    audioRef.current.load();
    audioRef.current.play();
  };
  return (
    <React.Fragment>
      {!!props.tracks.length && (
        <div className="mb-2">
          <audio style={{ width: "100%" }} controls ref={audioRef}>
            <source src={isPlaying} type="audio/mpeg" />
          </audio>
        </div>
      )}

      <div>
        {props.tracks.map((track) => (
          <Track
            track={track}
            key={track.id}
            source={isPlaying}
            onDelete={props.onDelete}
            onChange={() => onTrackChange(track.url)}
          />
        ))}
      </div>
    </React.Fragment>
  );
};

export default Audio;
