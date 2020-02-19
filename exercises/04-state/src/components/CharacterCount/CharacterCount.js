import React, {useState} from "react";

function CharacterCount(){
    const [characters, setCharacters] = useState(0);
    return <div>
        <textarea
        className="form-control"
        onChange={e => setCharacters(e.target.value.length)}
        />
        <p className="count">
            Character Count: {characters}
        </p>
    </div>
}

export default CharacterCount;