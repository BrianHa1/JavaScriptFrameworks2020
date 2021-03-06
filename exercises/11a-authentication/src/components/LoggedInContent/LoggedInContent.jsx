// You may need to import additional things here
import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

function LoggedInContent(props) {
  const [movies, setMovies] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  /**
   * Make an AJAX request to http://localhost:7000/jwt/movies to get a list of movies.
   * Be sure to provide the token in the AJAX request.
   */
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios("http://localhost:7000/jwt/movies", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    })
    .then(resp => setMovies(resp.data.data))
    .catch(err => {
      console.error(err);
      setErrorMessage("Oh no! An unexpected error occurred!");
    });
  }, []);
  
  return (
    <div className="container mt-2 mb-5">
      <div className="d-flex justify-content-between">
        <h1 className="h2">You are logged in!</h1>
        <button className="btn btn-primary" onClick={logout}>
          Logout
        </button>
      </div>
      <p>
        Notice that when you refresh the page, you are still logged in. That's
        because the token is stored in local storage.
      </p>
      <p>
        To delete the token, press <code>command+option+i</code> for Mac or{" "}
        <code>ctrl+shift+i</code> for Windows to open the Developer Tools. Click
        on the "Applications" tab in Chrome (or the "Storage" tab in Firefox).
        You will need to refresh the page after you delete the token.
      </p>
      {Object.values(movies).map((movie, idx) => {
        return (
          <div className="media mb-3" key={`movie-${idx}`}>
            <img
              src={movie.poster}
              alt={movie.title}
              width="150"
              height="220.875"
              className="mr-3"
            />
            <div className="media-body">
              <h2 className="h3">{movie.title}</h2>
              <p>{movie.synopsis}</p>
            </div>
          </div>
        );
      })}
      {errorMessage && (
        <div className="alert alert-danger" role="alert">
          {errorMessage}
        </div>
      )}
    </div>
  );
}

export default LoggedInContent;
