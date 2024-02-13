const http = require('http');
const json =
{
    "menu": {
        "firstCourse": "Vegetable Soup",
        "mainCourse": "Hamburger",
        "dessert": "Fruit salad"
    }
}

const server = http.createServer((req,res)=> {
    // res.end(`<h1>Hello, this is your server!</h1>`)
    if(req.url=="/"){
    res.writeHead(200, {"Content-Type": "text/html"})
    res.end(`
    <h1>Welcome to My Server</h1>
    <p style="border: 3px solid purple; width: 350px">some more words</p>
    `)
    }else if(req.url == "/information"){
        res.writeHead(200, {"Content-Type": "text/html"})
        res.end(`
        <h1>Information</h1>
        <p style="border: 3px solid purple; width: 350px">you reached the information page</p>
        `)
    }else if(req.url == "/shop"){
        res.writeHead(200, {"Content-Type": "text/html"})
        res.end(`
        <h1>Shop</h1>
        <p style="border: 3px solid purple; width: 350px">this is the shopping page</p>
        `)
    }else if(req.url == "/json"){
        res.writeHead(200, {"Content-Type": "application/json"})
        res.end(JSON.stringify({message:`${json.menu.firstCourse}, ${json.menu.mainCourse}, ${json.menu.dessert}` }))
    }
    else{
        res.writeHead(404, {"Content-Type": "text/html"})
        res.end(`
        <h1>Page not Found</h1>
        <p style="border: 3px solid purple; width: 350px">No page was found for the given URL</p>
        `)
    }
})

server.listen(3000, 'localhost', ()=>{
    console.log('Server running and listening on port 3000');
})


