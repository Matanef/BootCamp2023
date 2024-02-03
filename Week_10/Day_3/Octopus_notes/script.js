console.log(fetch('https://api.artic.edu/api/v1/artworks/4'));

/**Syntax
 * fetch(url) // passing the url of the API as a parameter
.then(function() {
    // Handle the data from the API
})
.catch(function() {
    // Handle any errors
});
 */

console.log("Starting ...")

const displayArtwork = (art) => {
    const {title, artist_title : artist, place_of_origin} = art.data
    const paragraph = document.querySelector("#info-art");
    paragraph.textContent = `The painting is named 
    ${title} by the artist ${artist} and its origin in ${place_of_origin}`;
}

const displayError = (error) => {
    const paragraph = document.querySelector("#info-art");
    paragraph.textContent = `We have a problem ${error}`;
}

const getArtwork = () => {
    console.log("Working ...")
    fetch("https://api.artic.edu/api/v1/artworks/79037")
        .then((response) => {
            console.log(response);
            if(response.ok === true){
                return response.json()
            } else {
                throw new Error("Wrong artwork")
            }
        })
        .then((obj) => {
            displayArtwork(obj);
        })
        .catch((error)  => {
            displayError(error);
        });
    console.log("Work Done ...")
}



getArtwork()




// console.log("Starting ...")

// const data = {
//     title: "Article on Javascript",
//     body: "This is an article presenting the new features of Javascript", 
//     userId:1
// }

// const objBody = {
//     method: "POST",
//     body: JSON.stringify(data),
//     headers: {"Content-type": "application/json; charset=UTF-8"}
// }

// const addArticle = () => {
//     console.log("Working ...")
//     fetch("https://jsonplaceholder.typicode.com/posts", objBody)
//         .then((response) => {
//             console.log(response);
//             if(response.ok === true){
//                 return response.json()
//             } else {
//                 throw new Error("Wrong post")
//             }
//         })
//         .then((obj) => {
//             console.log(obj);
//         })
//         .catch((error)  => {
//             console.log(error);
//         });
//     console.log("Work Done ...")
// }

// addArticle()


const chuckData = (joke) => {
    const {value} = joke
    const paragraph = document.querySelector("#chuck-art");
    paragraph.textContent = `the following joke brought to you by chuck: ${value}`;
}


const displayErrorChuck = (error) => {
    const paragraph = document.querySelector("#chuck-art");
    paragraph.textContent = `We have a problem ${error}`;
}

const getChuckJoke = () => {
    console.log("Working ...")
    fetch("https://api.chucknorris.io/jokes/random?category=money")
        .then((response) => {
            console.log(response);
            if(response.ok === true){
                return response.json()
            } else {
                throw new Error("Wrong joke")
            }
        })
        .then((obj) => {
            chuckData(obj);
        })
        .catch((error)  => {
            displayErrorChuck(error);
        });
    console.log("Work Done ...")
}
getChuckJoke()