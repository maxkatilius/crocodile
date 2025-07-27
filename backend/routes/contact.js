const express = require("express")
const router = express.Router()
const pool = require("../db")


// Handle contact form submissions
router.post('/', async (req, res) => {
  console.log('req', req, 'res', res)

  const { name, email, message } = req.body
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  try {
    const result = await pool.query(
      `INSERT INTO contact_messages 
        (name, email, message) VALUES ($1, $2, $3) 
      RETURNING *;
      `, [name, email, message]
    )
    res.status(201).json({ message: 'Message received', data: result.rows[0] })
  } catch (err) {
    console.error('Error inserting message:', err)
    res.status(500).json({ error: 'Database insert failed' })
  }
})


module.exports = router