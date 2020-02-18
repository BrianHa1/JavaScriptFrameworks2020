import React from "react";
// import something
import "./App.css";
// importing the array of images from image directory
import {images} from "../src/images/images";

function App() {
  return (<div className="App">{
    images.map((image) => (
      <img key={index} src={image}/>
    ))}
    </div>
  );
}

export default App;
