const knex = require("knex");

const db = knex({
  client: "pg",
  connection: {
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "Lanou945",
    database: "postgres",
  },
});

// console.log(db);

// db.select('id','name', 'price').from('products')
// .then(rows => {
//   console.log(rows);
// })
// .catch((err)=>{
//   console.log(err);
// })

// db.raw("insert into products (name, price) values ('Samsung S25', 4000)")
// .then(data => {
//   console.log(data.rows);
// })
// .catch((err)=>{
//   console.log(err);
// })

// db('products')
// // .insert([
// //   {name: 'Samsung s29', price: 5555},
// //   {name: 'Samsung s30', price: 8888},
// // ], ['id', 'name'])
// // .update({ name: 'Samsung s32'}, ['*'])
// .del(['*'])
// .where({ id: 2 })
// .then(rows => {
//   console.log(rows);
// })
// .catch((err)=>{
//   console.log(err);
// })

module.exports = {
  db,
};



//Ziv's code
// console.log(db);

// db("products")
//   .select("id", "name", "price")
//   //   .from("products")
//   .then((rows) => {
//     console.log(rows);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// db.raw("insert into products (name,price) values ('Samsung S26', 5000)")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// db("products")
//   //   .insert([
//   //     { name: "Sansung S29", price: 5555 },
//   //     { name: "Sansung S30", price: 8888 },
//   //   ],['id'])
// //   .update({ name: "Samsung S32" },['*'])
// .del(['*'])
// .where({ id: 2 })
// .then((data) => {
//   console.log(data);
// })
// .catch((err) => {
//   console.log(err);
// });
