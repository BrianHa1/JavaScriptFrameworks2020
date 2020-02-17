import React from "react";
// import something
import "./App.css";
// importing the array of images from image directory
import {images} from "./images/images";

function App() {
  return (<div className="App">{
    images.map((image, i) => (
      <img 
      src={image.src}
      key={i} 
      />
    ))
  }</div>
  );
}

export default App;
