const express = require("express")
const router = express.Router()
const pool = require("../db")

// Handle new customer
router.post('/', async (req, res) => {
  const { fname, lname, email, phone, address, city, postcode } = req.body
  if (!fname || !lname || !email || !phone) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  try {
    const result = await pool.query(
      `INSERT INTO customers 
        (fname, lname, email, phone, address, city, postcode) VALUES ($1, $2, $3, $4, $5, $6, $7) 
      RETURNING *;
      `, [fname, lname, email, phone, address, city, postcode]
    )
    res.status(200).json({ message: 'Message received', data: result.rows[0] })
  } catch (err) {
    console.error('Error inserting customer:', err)
    res.status(500).json({ error: 'Database insert failed' })
  }
})

module.exports = router