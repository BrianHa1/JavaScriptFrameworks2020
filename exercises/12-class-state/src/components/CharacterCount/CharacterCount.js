import React, { Component } from "react";

class CharacterCount extends Component {
    state = {
        numberOfCharacters: 0
    };

    render() {
        return (
            <div className="container mt-4 h1">
                <textarea
                className="form-control"
                onChange={(e) => this.setState({numberOfCharacters: e.target.value.length})} />
                <p>Character Count: {this.state.numberOfCharacters}</p>
            </div>
        );
    }
}

export default CharacterCount;