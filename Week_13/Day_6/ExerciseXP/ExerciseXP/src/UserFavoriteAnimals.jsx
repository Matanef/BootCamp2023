import React from 'react';

const UserFavoriteAnimalsTitle = <h2>Favorite Animal</h2>;

const UserFavoriteAnimals = (props) =>{
        const { favAnimals } = props;
        const animalsList = favAnimals.map((animal, index) => (
            <li key={index}>{animal}</li>
        ));
    return (
                    <div>
                        {UserFavoriteAnimalsTitle}
                        <ul>{animalsList}</ul>
                    </div>
                );
}

// class UserFavoriteAnimals extends React.Component {
//     render() {
//         const { favAnimals } = this.props;
//         const animalsList = favAnimals.map((animal, index) => (
//             <li key={index}>{animal}</li>
//         ));

//         return (
//             <div>
//                 {UserFavoriteAnimalsTitle}
//                 <ul>{animalsList}</ul>
//             </div>
//         );
//     }
// }

export default UserFavoriteAnimals