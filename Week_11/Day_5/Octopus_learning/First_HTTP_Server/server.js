const http = require('http')

// const server = http.createServer((req, res) => {
//     // Send response
//     res.end('Hello World from the server')
// })

// server.listen(5000, 'localhost', () => {
//     console.log('Server is listening at localhost on port 5000')
// })

//IMPORTANT!!!!! the 'localhost' parameter is how the url in the browser will look like.
/**Example
 * while i used 'localhost' in the function i wasn't able to reach the server with 127.0.0.1:5000
 * i was able to reach the serve with localhost:5000
 */

// const server = http.createServer((req,res)=> {
//     if(req.url == "/"){
//         res.end(`
//         <h1>Home Page</h1>
//         <p>some more text</p>
//         `)
//         console.log('Ping-home');
//     }else if(req.url == "/about"){
//         res.end(`
//         <h1>About Page</h1>
//         <p>some more text</p>
//         `)
//         console.log('Ping-about');
//     }else{
//         res.writeHead(404, {
//             'Content-type' : 'text/html'
//         })
//         res.end(`<h1>Page not found</h1>`)
//         console.log('Ping-404');
//     }
// });

// server.listen(5000, 'localhost', () =>{
//     console.log('Server is listening at localhost on port 5000')
// })


// const server = http.createServer((req,res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-type', "text/html");
//     res.end('Hello World')
// })


// Returns content-type = text/plain
// const server = http.createServer((req, res) => {
//     res.setHeader('Content-Type', 'text/html');
//     res.setHeader('X-Foo', 'bar');
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('ok');
//   }); 
//   server.listen(5000, ()=>{
//     console.log('Server is running and is listening on port 5000');
// })


const server = http.createServer((req, res) => {  
    //check the URL of the current request
    //check if the request URL is equal to /welcome.
    if (req.url == '/welcome') { 
        // 1. inform the client that we send a JSON response in the header with the appropriate content type.
        res.setHeader("Content-Type", "application/json");
        //2. 
        res.writeHead(200);
        res.end(JSON.stringify({ message: "Welcome New User"}));
        // OR
        // res.write(JSON.stringify({ message: "Welcome New User"}));  
        //res.end();  
    } else {
         res.end("Another page");  
    }
});
server.listen(5000);
console.log('Node.js web server at port 5000 is running..')