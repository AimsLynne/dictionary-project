import React, { useState } from "react";
import axios from "axios";
import Result from "./Result";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [loaded, setLoaded] = useState(false);
  const [definition, setDefinition] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState(false);

  function handleImages(response) {
    setPhotos(response.data.photos);
  }

  function handleResponse(response) {
    if (response.data?.status === "not_found") {
      setError(true);
      return;
    }
    setError(false);
    setDefinition(response.data);
    let apiKey = "eac360db5fc86ft86450f3693e73o43f";
    let apiUrl = `https://api.shecodes.io/images/v1/search?query=${response.data.word}&key=${apiKey}`;
    axios
      .get(apiUrl, { headers: { Authorization: `Bearer ${apiKey}` } })
      .then(handleImages);
  }

  function load() {
    setLoaded(true);
    search();
  }

  function search() {
    let apiKey = "01cf80e9bcbto43d240bebba2f83d942";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  if (loaded) {
    return (
      <div className="container">
        <div className="Dictionary">
          <section>
            <form onSubmit={handleSubmit}>
              <label>What word do you want to look up?</label>
              <input
                type="search"
                placeholder={props.defaultKeyword}
                autoFocus={true}
                className="form-control search-input"
                onChange={handleKeywordChange}
              />
            </form>
            <small className="hint">
              i.e. knowledge, travel, library, coding...
            </small>
          </section>
          <br />
          {error ? (
            <p>Can't find any results for your search...</p>
          ) : (
            <>
              <Result definition={definition} />
              <Photos photos={photos} />
            </>
          )}
        </div>
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
