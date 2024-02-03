const sayHey = ()=>{
    console.log('hey');
}
sayHey()

const api_key= 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';
const dataUrl = 'https://api.giphy.com/v1/gifs/search';
const limit = 10;
const offset = 2;
const q = "sun"
const rating= "g"


const fullUrl = `${dataUrl}?q=${q}&limit=${limit}&offset=${offset}&api_key=${api_key}`;

fetch(fullUrl)
.then(response =>{
    console.log(response);
    if (!response.ok){
        throw new Error(`error: ${response}`)
    }
    return response.json();
})
.then(data => {
    console.log(data);
})
.catch(e =>{
    console.log(e);
})

const Data = (gifInfo) => {
    const {id, rating, title} = gifInfo[0]
    const paragraph = document.querySelector("#gif_cont");
    paragraph.textContent = `GIF ID: ${id}
     ${rating} ${title}`;
}


const displayError = (error) => {
    const paragraph = document.querySelector("#gif_cont");
    paragraph.textContent = `We have a problem ${error}`;
}

const getGif = () => {
    fetch(fullUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            Data(data.data); // Assuming data is the array of gifs
        })
        .catch(error => {
            displayError(error);
        });
}

getGif();