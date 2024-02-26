import React from 'react';

const UserFavoriteAnimalsTitle = <h2>Favorite Animal</h2>


class UserFavoriteAnimals extends React.Component{
    render() {
        const {favAnimal} = props;
        const UserFavoriteAnimalsList = favAnimal.map((animal, index) => (
        <li key={index}>{animal}</li>
        ))
    
        return (
<div>
    {UserFavoriteAnimalsTitle}
    <ul>{UserFavoriteAnimalsList}</ul>
</div>
        )
    }
}
export default UserFavoriteAnimals;