import React, { Component } from "react";

class LessText extends Component {
    state = {
        textLength: this.props.maxLength
    };

    setTextLength = (lengthOfText) => {
        this.setState({textLength: lengthOfText});
    }

    render() {
        const {text, maxLength} = this.props;
        return (
            <div className="container mt-4 h1">
                <p>{text.substring(0, this.state.textLength)}</p>
                <button className="btn btn-primary" onClick={() => this.setTextLength(text.length)}>
                    Read More
                </button>
                <button className="btn btn-secondary" onClick={() => this.setTextLength(maxLength)}>
                    Read Less
                </button>
            </div>
        );
    }
}

export default LessText;