const dotenv = require('dotenv')
dotenv.config()

const { Pool } = require('pg')

const pool = new Pool({
  host: process.env.SUPABASE_HOST,
  port: process.env.SUPABASE_PORT,
  database: process.env.SUPABASE_DATABASE,
  user: process.env.SUPABASE_USER,
  password: process.env.SUPABASE_PASSWORD,
  ssl: {
    rejectUnauthorized: false, // Required by Supabase in some hosts
  },
})

module.exports = pool