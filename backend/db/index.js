const dotenv = require('dotenv')
dotenv.config()

const { Pool } = require('pg')

const pool = new Pool({
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  database: process.env.PG_DATABASE,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  ssl: {
    rejectUnauthorized: false, // Required by Supabase in some hosts
  },
})

module.exports = pool