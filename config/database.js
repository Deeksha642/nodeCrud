const { Pool } = require('pg');

const pool = new Pool({
    host: "localhost",
    port: 5432,
    user: "postgres",
    database: "koa_crud"
});

module.exports = pool;
