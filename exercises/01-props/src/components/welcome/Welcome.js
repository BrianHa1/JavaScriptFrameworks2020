import React from "react";

function Welcome(props){
    return (
    <div>Hello,{props.name}</div>
    );
}

Welcome.defaultProps = {
    name: "user"
};

export default Welcome;