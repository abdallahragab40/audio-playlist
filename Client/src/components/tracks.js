import React, { Fragment, useState } from "react";
import Audio from "./audio";

const Tracks = (props) => {
  const [searchText, setSearchText] = useState("");

  const tracks = props.tracks.filter((track) =>
    track.name.toLowerCase().includes(searchText)
  );

  const tracksToDisplay = searchText ? tracks : props.tracks;

  return (
    <Fragment>
      <label htmlFor="search">Search:</label>
      <input
        className="form-control mt-2"
        type="search"
        placeholder="Search by track name..."
        aria-label="Search"
        id="search"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value.toLowerCase())}
        name="searchText"
      />
      <hr />

      {!tracks.length && (
        <div>There are no tracks to display based on your search criteria.</div>
      )}

      <ul className="list-group">
        <Audio tracks={tracksToDisplay} onDelete={props.onDelete} />
      </ul>
    </Fragment>
  );
};

export default Tracks;
