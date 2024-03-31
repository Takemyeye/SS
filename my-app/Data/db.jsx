const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'soulswapdata',
  password: '7981',
  port: 5432, 
});

module.exports = pool;