import React from "react";
import "./App.css";
// Import LessText here
import LessText from "./components/LessText/LessText";
// Import CharacterCount here
import CharacterCount from "./components/CharacterCount/CharacterCount";

function App() {
  return (
    <>
      <div className="container pt-4 pb-4">
        <h2 className="h3">Challenge 1 - Less Text</h2>
        {<LessText text="This is a line of text." maxLength={9} />}
      </div>
      <div className="bg-secondary text-white pt-4 pb-4 mb-4">
        <div className="container">
          <h1 className="h3">Challenge 2 - Character Count</h1>
          <p>Records the amount of words you type!</p>
          {/* Add CharacterCount here */}
        </div>
      </div>
    </>
  );
}

export default App;
