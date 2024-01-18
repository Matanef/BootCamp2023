const arr = [{
    id: 0,
    author: "Helen Keller",
    quote:"Life is either a daring adventure or nothing."
},{
    id: 1,
    author: "John Wooden",
    quote:"Do not let making a living prevent you from making a life."
},{
    id: 2,
    author: "J. R.R. Tolkien",
    quote:"Not all those who wander are lost;"
},{
    id: 3,
    author: "Mae West",
    quote:"You only live once, but if you do it right, once is enough."
},{
    id: 4,
    author: "Mark Twain",
    quote:"If you tell the truth, you don't have to remember anything."
},{
    id: 5,
    author: "Elbert Hubbard",
    quote:"A friend is someone who knows all about you and still loves you."
},{
    id: 6,
    author: "Helen Keller",
    quote:"Friedrich Nietzsche"
}]

document.getElementById('button').addEventListener("click", displayQuote);


function displayQuote() {
    const randomIndex = Math.floor(Math.random()*arr.length);
    console.log(randomIndex);
    const randomQ = arr[randomIndex];
        let html = `
        <div id="quoteContainer" style="display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color:white>
        <p id="innerHtml">${randomQ.quote}</p>
        <p id="innerHtml">${randomQ.author}</p>
        </div>`
        document.getElementById('blank').innerHTML=html
};    


displayQuote()