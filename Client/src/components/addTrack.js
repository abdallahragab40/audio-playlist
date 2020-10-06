import React, { Fragment, useState } from "react";

const AddTrack = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    length: "",
    artist: "",
    url: "",
  });

  const { name, length, artist, url } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:3000/tracks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => props.onAdd(data));
    setFormData({
      name: "",
      length: "",
      artist: "",
      url: "",
    });
  };

  return (
    <Fragment>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="form-group">
          <label htmlFor="name">Track name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={name}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="length">Track length</label>
          <input
            type="text"
            className="form-control"
            id="length"
            name="length"
            value={length}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="artist">Artist</label>
          <input
            type="text"
            className="form-control"
            id="artist"
            name="artist"
            value={artist}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="url">Track url</label>
          <input
            type="text"
            className="form-control"
            id="url"
            name="url"
            value={url}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <button type="submit" className="btn btn-primary mb-2">
          Add
        </button>
      </form>
    </Fragment>
  );
};

export default AddTrack;
