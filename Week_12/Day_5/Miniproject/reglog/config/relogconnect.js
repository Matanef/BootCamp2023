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

module.exports = {
    db,
  };
  