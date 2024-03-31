import React from "react";

const FirstFunction = () =>{
const [name, setName] = React.useState("World")
    return(
        <>
        <p>this is the set state and i used "useState" to set it</p>
        <p>{name}</p>
        </>
    )
}

export default FirstFunction