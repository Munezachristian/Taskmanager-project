const { Pool } =require('pg');
const pool = new Pool({
    user:'postgres',
    host:'localhost',
    database:'taskmanager',
    password:'5002',
    port:5432,
});
module.exports=pool;
