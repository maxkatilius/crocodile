const dotenv = require('dotenv')
dotenv.config()

const { Pool } = require('pg')

const isProd = process.env.NODE_ENV === 'production'

const pool = new Pool(
  process.env.DATABASE_URL
    ? { connectionString: process.env.DATABASE_URL, ssl: isProd ? false : { rejectUnauthorized: false } }
    : {
        host: process.env.PGHOST,
        port: Number(process.env.PGPORT),
        database: process.env.PGDATABASE,
        user: process.env.PGUSER,
        password: process.env.PGPASSWORD,
        ssl: isProd ? false : { rejectUnauthorized: false },
      }
)

pool.query('SELECT 1')
  .then(() => console.log('DB OK'))
  .catch(e => console.error('DB FAIL:', process.env.PGHOST, process.env.PGPORT, e.code, e.message))

module.exports = pool