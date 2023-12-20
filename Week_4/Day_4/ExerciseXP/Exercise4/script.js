const allBooks = []
    
const book1 = {
        title: "Lord Of the Rings",
        author: "J. R. R. Tolkien",
        image: "https://picsum.photos/200",
        alreadyRead: "true"
    }
const book2= {
        title: "The Prince",
        author: "Niccolò Machiavelli",
        image: "https://en.wikipedia.org/wiki/The_Prince#/media/File:Machiavelli_Principe_Cover_Page.jpg",
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
</tbody
`
const bookListDiv = document.querySelector(".list-books")
console.log('bookListDiv:', bookListDiv);
bookListDiv.append(table)


