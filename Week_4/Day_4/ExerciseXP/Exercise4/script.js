const allBooks = []
    
const book1 = {
        title: "Lord Of the Rings",
        author: "J. R. R. Tolkien",
        image: "https://tolkiengateway.net/w/images/thumb/c/c3/The_Lord_of_the_Rings_1954-55.png/800px-The_Lord_of_the_Rings_1954-55.png",
        alreadyRead: "true"
    }
const book2= {
        title: "The Prince",
        author: "Niccolò Machiavelli",
        image: "https://m.media-amazon.com/images/I/4117w9ptZnL._AC_UF894,1000_QL80_.jpg",
        alreadyRead: "true"    
    }
allBooks.push(book1, book2)
console.log(allBooks);


const table = document.createElement("table");
table.innerHTML = `
<thead>
    <tr>
        <th colspan = "3"> My Book List</th>
    </tr>
</thead>
<tbody>
    <tr>
<td>${book1.title} Written by ${book1.author}</td>
<td>
<img src="${book1.image}">
</td>
<td>Already read: ${book1.alreadyRead}</td>
    </tr>
    <tr>
    <td>${book2.title} Written by ${book2.author}</td>
<td>
<img src="${book2.image}">
</td>
<td>Already read: ${book2.alreadyRead}</td>
    </tr>
    
</tbody
`
const bookListDiv = document.querySelector(".list-books")
console.log('bookListDiv:', bookListDiv);
bookListDiv.append(table);

//tried to do it from here but wasn;t able to so used CSS style.
// const imgSize = document.getElementsByTagName("img");
// imgSize.style.width = "100px";
// console.log(imgSize);


if (book1.alreadyRead ==="true"){
    
}