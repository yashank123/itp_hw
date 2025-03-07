import React from "react";

function Greeting(){
    return <Welcome name='yashank' age='21'/>
}

const Welcome = (props) => (
    <>
    <h1>hello, {props.name}</h1>
    <p>your age is , {props.age} </p>
    </>
)

export default Greeting