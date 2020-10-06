import React, { Fragment, useState, useEffect } from "react";
import AddTrack from "./components/addTrack";
import Tracks from "./components/tracks";

function App() {
  const [displayAddTrack, toggleAddTrack] = useState(false);
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/tracks")
      .then((res) => res.json())
      .then((data) => setTracks(data));
  }, []);

  const handleDelete = (track) => {
    fetch("http://localhost:3000/tracks/" + track.id, {
      method: "DELETE",
    });
    const newTracks = tracks.filter((t) => t.id !== track.id);
    setTracks(newTracks);
  };

  const handleAdd = (track) => {
    const newTracks = [...tracks];
    newTracks.unshift(track);
    setTracks(newTracks);
  };

  return (
    <Fragment>
      <div className="container mt-2">
        <h1 className="text-center">Interactive Audio Playlist</h1>
        <Tracks tracks={tracks} onDelete={handleDelete} />
        <div className="text-center">
          <button
            onClick={() => toggleAddTrack(!displayAddTrack)}
            type="button"
            className="btn btn-primary text-uppercase mt-2 "
          >
            Add new track
          </button>
        </div>
        {displayAddTrack && <AddTrack onAdd={handleAdd} />}
      </div>
    </Fragment>
  );
}

export default App;
