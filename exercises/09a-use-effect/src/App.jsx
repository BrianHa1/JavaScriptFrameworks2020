// Import useEffect here
import React, { useState, useEffect } from "react";
import "./App.css";
// import Axios (or use Fetch)
import axios from "axios";

function App() {
  /**
   * Set up your state
   */
  const [quote, setQuote] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  /**
   * Make an AJAX call with the useEffect hook
   */
  useEffect(async () => {
    try{
      let response = await axios.get("https://ron-swanson-quotes.herokuapp.com/v2/quotes");
      setQuote(response.data[0]);
    }
    catch (e){
      console.error(e);
      setHasError(true);
    }
    setIsLoading(false);
  }, []);
  return (
    <body class="bg-warning text-center">
    <img
      src="https://res.cloudinary.com/lando726/image/upload/v1466479089/ronswanson_gkopu4.png"
      alt=""
      width="450"
      height="423"
      class="mt-4"
    />
    <div class="container">
      {
        isLoading && <div>Loading...</div>
      }
      {
        hasError 
        && 
        <div className="error bg-white text-secondary border border-secondary mb-4">
          Oh no! An unexpected error has occurred while the request was being made.
        </div>
      }
      <blockquote
        id="quote"
        class="blockquote bg-dark text-white border-0 mb-4"
      >
        {
          quote
        }
      </blockquote>
    </div>
  </body>
  );
}

export default App;
