const { Pool } = require("pg");
//start caching server on port 6379
let pool;
try {
  pool = new Pool({
    port: 5432 || process.env.PGDB_PORT,
    host: "localhost" || process.env.DB_HOST,
    user: "postgres" || process.env.PGUSER,
    password: "1215" || process.env.PGDB_PASS,
    database: "azularcDB" || process.env.MYSQL_DB,
  });
} catch (err) {
  console.log(err);
}
module.exports = { pool };
