import React from "react";

function Heading({ content }){
    //console.log(content) Object i consollen
    return (
        <h1>{ content }</h1> //Dynamisk overskrift fra content på app.js
    )
}

export default Heading;