const arr = [{
    id: 0,
    author: "Helen Keller",
    quote: "Life is either a daring adventure or nothing.",
    likes: 0
}, {
    id: 1,
    author: "John Wooden",
    quote: "Do not let making a living prevent you from making a life.",
    likes: 0
}, {
    id: 2,
    author: "J. R.R. Tolkien",
    quote: "Not all those who wander are lost;",
    likes: 0
}, {
    id: 3,
    author: "Mae West",
    quote: "You only live once, but if you do it right, once is enough.",
    likes: 0
}, {
    id: 4,
    author: "Mark Twain",
    quote: "If you tell the truth, you don't have to remember anything.",
    likes: 0
}, {
    id: 5,
    author: "Elbert Hubbard",
    quote: "A friend is someone who knows all about you and still loves you.",
    likes: 0
}, {
    id: 6,
    author: "Helen Keller",
    quote: "Friedrich Nietzsche",
    likes: 0
}, {
    id: 7,
    author: "Hadasa Efrati",
    quote: "Everything looks the same in your stomach",
    likes: 0
}, {
    id: 8,
    author: "Mahatma Gandhi",
    quote: "You must be the change you wish to see in the world.",
    likes: 0
}, {
    id: 9,
    author: "Mother Teresa",
    quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    likes: 0
}, {
    id: 10,
    author: "Franklin D. Roosevelt",
    quote: "The only thing we have to fear is fear itself.",
    likes: 0
}, {
    id: 11,
    author: "Martin Luther King Jr.",
    quote: "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
    likes: 0
}, {
    id: 12,
    author: "Eleanor Roosevelt",
    quote: "Do one thing every day that scares you.",
    likes: 0
}, {
    id: 13,
    author: "Benjamin Franklin",
    quote: "Well done is better than well said.",
    likes: 0
}, {
    id: 14,
    author: "Helen Keller",
    quote: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
    likes: 0
}, {
    id: 15,
    author: "Aristotle",
    quote: "It is during our darkest moments that we must focus to see the light.",
    likes: 0
}, {
    id: 16,
    author: "Ralph Waldo Emerson",
    quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    likes: 0
}, {
    id: 17,
    author: "Oscar Wilde",
    quote: "Be yourself; everyone else is already taken.",
    likes: 0
}];
let randomQ;

document.getElementById('button').addEventListener("click", displayQuote);


function displayQuote() {
    const randomIndex = Math.floor(Math.random()*arr.length);
    console.log(randomIndex);
    randomQ = arr[randomIndex];
        let html = `
        <div id="quoteContainer" style="display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color:white>
        <div id="divQuote">
        <p>${randomQ.quote}</p>
        </div>
        <div id="divAuthor">
        <p>${randomQ.author}</p>
        <button id="like">Like</button>
        <span id="likeCount">0</span>
        </div>
        </div>`
        document.getElementById('blank').innerHTML=html;
        const likeButton = document.getElementById('like');
        const likeCount = document.getElementById('likeCount');
        let count = 0;
    
        likeButton.addEventListener('click', function(event) {
            count++;
            likeCount.innerText = count;
        });
        return randomQ.quote, randomQ.author;
};    



document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    console.log(formData.get('quote'));
    console.log(formData.get('author'));
    addFunction(formData)
});

function addFunction(formData){
    const idValue = arr[arr.length-1].id+1
    const newObj = {id: idValue,
                    author:formData.get('author'), 
                    quote:formData.get('quote')
                    };
    arr.push(newObj)

displayQuote()
}
document.getElementById('saveFile').addEventListener('click',function (event){
    const quotesJSON = JSON.stringify(arr);

    const blob = new Blob([quotesJSON], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'quotes.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url); 
});


document.getElementById('count').addEventListener('click',function (event){
    count1();
});

function count1(){
    const quoteString = randomQ.quote;
    const quoteLength = quoteString.length
    let htmlCount = `Number of character inside the quote: ${quoteLength}`;
    document.getElementById('displayCount').innerHTML = htmlCount;
    console.log(quoteLength);
    };

document.getElementById('count2').addEventListener('click', function (event) {
    countWithoutSpaces();
});

function countWithoutSpaces() {
    const quoteString = randomQ.quote.replace(/\s/g, '');
    const quoteLength = quoteString.length;
    let htmlCount = `Number of characters inside the quote (without spaces): ${quoteLength}`;
    document.getElementById('displayCount').innerHTML = htmlCount;
    console.log(quoteLength);
};

document.getElementById('count3').addEventListener('click', function (event) {
    numberOfWords();
});

function numberOfWords(){
    const quoteString = randomQ.quote
    let quoteWord = quoteString.split(' ').length;
    let htmlCount = `Number of words in the quote: ${quoteWord}`;
    document.getElementById('displayCount').innerHTML = htmlCount;
    console.log(quoteString);
};

// const likeButton = document.getElementById('like')
// const likeCount = document.getElementById('likeCount');
// let count = 0;

// likeButton.addEventListener('click', function(event){
//     count++;
//     likeCount.innerText =count
// });
document.getElementById('byAuthor').addEventListener('submit',function(event){
    event.preventDefault();
    const authorInput = document.getElementById('author').value.toLowerCase();
    console.log(authorInput);
    const filteredQuotes = arr.filter((quote) => quote.author.toLowerCase().includes(authorInput));
    if(filteredQuotes.length >1){
        randomQ = filteredQuotes[0];
        displayQuote(authorInput)
    }else {
        document.getElementById('blank').innerHTML = "<p>No quotes found for this author</p>";
    }

});
