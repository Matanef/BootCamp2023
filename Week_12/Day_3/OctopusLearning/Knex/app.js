const express = require('express')
const app = express()

const knex = require("knex");

const db = knex({
  client: "pg",
  connection: {
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "Lanou945",
    database: "Hollywood",
  },
});

app.set("db", db);

app.listen(3000, () => console.log('Example app listening on port 3000!'));

// app.get("/", (req,res) =>{
//     db.select('first_name', 'last_name', 'number_oscars').from('actors')
//     .then(actors => res.send(actors))

// })

// app.get("/", (req,res) =>{
//     db.select().from('actors').then(actors => res.send(actors))

// })

// app.get("/", (req,res) =>{
//     db.select().from('actors')
//     .where({first_name: "Matt", last_name: "Damon"})
//     .then(actors => res.send(actors))

// })


// app.get('/', (req, res) => {
//     db('actors')
//     .where('actors.number_oscars', ">=", 2)
//     .then(actors => {
//         // Check for errors
//         if (!actors) {
//             return res.status(404).send("No actors found");
//         }
//         // Send the actors
//         res.send(actors);
//     })
//     .catch(err => {
//         // Handle any errors
//         console.error("Error fetching actors:", err);
//         res.status(500).send("Internal server error");
//     });
// });

// app.get('/', (req, res) => {
//     db('actors')
//     .where('number_oscars', '>=', 2)
//     .then(actors =>
//         res.send(actors)
//     )

// })


// app.get('/', (req,res) => {
//     db('actors')
//     .where({first_name: 'Tom'}).orWhere('actor_id', 1)
//     .then(actors => 
//         res.send(actors)
//     )
// })

// app.get('/', (req,res)=>{
//     db('actors')
//         // .returning(['actor_id', 'first_name', 'last_name'])
//         .insert({ first_name: 'Sean', last_name: 'Astin', birthdate: '1971-02-25', number_oscars: 0}, ['*'])
//         .then(actors => {
//                     // Check for errors
//                     if (!actors) {
//                         return res.status(404).send("No actors found");
//                     }
//                     // Send the actors
//                     res.send(actors);
//                 })
//                 .catch(err => {
//                     // Handle any errors
//                     console.error("Error fetching actors:", err);
//                     res.status(500).send("Internal server error");
//                 });
// })

// app.get('/', (req, res) => {
//     db('actors')
//         .returning(['actor_id', 'first_name', 'last_name'])
//         .insert({ first_name: 'Gal', last_name: 'Gadot', birthdate: '1985-04-30', number_oscars: 0 })
//         .then(actors =>
//             res.send(actors)
//         )
// })

// app.get('/', (req, res) =>{
//     db('actors')
//     .where({first_name: 'Gal', last_name: 'Gadot'})
//     .update({number_oscars: 2}, ['first_name', 'last_name', 'number_oscars'])
//     .then(actors => {
//         res.send(actors)
//     })
// })

// app.get('/', (req,res) =>{
//     db('actors')
//     .then(actors=> {
//         console.log('Got ping from browser');
//         res.send(actors)
//     })
// })

app.get('/', (req,res) => {
    db('actors')
    .where('last_name', 'Astin')
    .del(['actor_id', 'first_name', 'last_name'])
    .then(actors =>{
        console.log('Got ping from browser');
        res.send(actors)
    })
})
