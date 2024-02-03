const sayHey = ()=>{
    console.log('hey');
}
sayHey()

const api_key= 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';
const dataUrl = 'https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';

fetch(dataUrl)
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
    paragraph.textContent = `${id} ${rating} ${title}`;
}


const displayError = (error) => {
    const paragraph = document.querySelector("#gif_cont");
    paragraph.textContent = `We have a problem ${error}`;
}

const getGif = () => {
    fetch(dataUrl)
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