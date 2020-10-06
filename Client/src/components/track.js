import React from "react";

const Track = (props) => {
  return (
    <li
      onClick={() => props.onChange(props.source)}
      className={
        props.source === props.track.url
          ? "list-group-item active"
          : "list-group-item text-primary"
      }
      style={{ cursor: "pointer" }}
    >
      {props.track.name} - {props.track.artist}
      <button
        onClick={() => props.onDelete(props.track)}
        className="btn btn-danger btn-sm float-right"
        type="button"
        style={{ cursor: "pointer" }}
      >
        X
      </button>
      <p className="text-dark">{props.track.length}</p>
    </li>
  );
};

export default Track;
