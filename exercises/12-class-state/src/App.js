import React from "react";

// Import Likes here
import Likes from "./components/Likes/Likes";
// Import LessText here
import LessText from "./components/LessText/LessText";
// Import CharacterCount here
import CharacterCount from "./components/CharacterCount/CharacterCount";

function App() {
  return (
    <>
      <div className="bg-secondary text-white pt-4 pb-4 mb-4">
        <div className="container">
          <h1 className="h3">Challenge 1 - Likes</h1>
          {<Likes />}
        </div>
      </div>
      <div className="container pt-4 pb-4">
        <h2 className="h3">Challenge 2 - Less Text</h2>
        {<LessText text="This is a line of text." maxLength={9}/>}
      </div>
      <div className="bg-secondary text-white pt-4 pb-4 mb-4">
        <div className="container">
          <h1 className="h3">Challenge 3 - Character Count</h1>
          <h2>Records the amount of words you type!</h2>
          {<CharacterCount />}
        </div>
      </div>
    </>
  );
}

export default App;
