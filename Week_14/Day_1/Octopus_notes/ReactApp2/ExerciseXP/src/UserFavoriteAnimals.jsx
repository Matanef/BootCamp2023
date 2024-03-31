import React from "react";


class UserFavoriteAnimals extends React.Component {
    
    render(){
        const favAnimals = this.props.favAnimals
    return (
        <>
        <h2>{favAnimals}</h2>
        {favAnimals.map((item, index) => (
            <ul key={index}>
                <li>{item}</li>
            </ul>
        ))}
        </>
    )
    }
}

export default UserFavoriteAnimals