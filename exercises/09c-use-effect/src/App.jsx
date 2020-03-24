// import useEffect
import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  /**
   * Set up state and make AJAX requests here
   */
  const [everyCharacter, setEveryCharacter] = useState([]);
  const [characterImage, setCharacterImage] = useState("https://i.ytimg.com/vi/UFFi9PWKDjg/maxresdefault.jpg");
  const [characterName, setCharacterName] = useState("");

  useEffect(() => {
    (async () => {
      const response = await axios("https://rickandmortyapi.com/api/character");
      setEveryCharacter(response.data.results);
    })();
  }, []);

  const getCharacter = async characterID => {
    const response = await axios(`https://rickandmortyapi.com/api/character/${characterID}"`);
    setCharacterImage(response.data.characterImage);
    setCharacterName(response.data.characterName);
  };

  return (
    <div className="container">
      <div className="row text-center" id="body">
        <h1 id="title-head">{characterName}</h1>
        <div id="main-img">
          <a href="http://rickandmorty.wikia.com/wiki/Rick_Sanchez">
            <img
              alt={characterName}
              src={characterImage}
              height="250"
            />
          </a>
          <div className="linkfooter">
            <p>Select your favorite character</p>
            <select id="dropdown" type="text" onChange={e => getCharacter(e.target.value)}>
              <option></option>
              {
                everyCharacter.map(character => (
                  <option value={character.id} key={character.id}>
                    {character.characterName}
                  </option>
                ))
              }
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
