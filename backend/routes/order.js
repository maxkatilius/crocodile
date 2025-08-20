const express = require("express")
const router = express.Router()
const pool = require("../db")

// Handle order
router.post('/', async (req, res) => {
  const client = await pool.connect()

  try {
    const { customerDetails, cart } = req.body
    const { fname, lname, email, phone, address, city, postcode} = customerDetails
    if (!fname || !lname || !email || !phone || !address || !city ||!postcode) {
      return res.status(400).json({ error: 'Missing required fields' })
    } 


    await client.query('BEGIN')

    // check if email is already in database if so return that customer id:
    const existingCustomerFetch = await client.query(
      `SELECT
        id
      FROM customers
      WHERE email = $1;
      `, [email]
    )

    let customerId 
    if (existingCustomerFetch.rows.length > 1) {
      customerId = existingCustomerFetch.rows[0].id
    } else {
      const customerResult = await client.query(
        `INSERT INTO customers
          (fname, lname, email, phone, address, city, postcode) 
        VALUES 
          ($1, $2, $3, $4, $5, $6, $7) 
        RETURNING id;
        `, [fname, lname, email, phone, address, city, postcode]
      )
      customerId = customerResult.rows[0].id
    }

    let total = 0
    for (const cartItem of cart) {
      const { qty, price } = cartItem
      total += Math.round(price * qty * 100) / 100 
    }

    const orderResult = await client.query(
      `INSERT INTO orders
        (customer_id, total) VALUES ($1, $2)
      RETURNING id;
      `, [customerId, total]
    )
    const orderId = orderResult.rows[0].id

    for (const cartItem of cart) {
      const { id, color, size, qty, price } = cartItem

      const productVariantFetch = await client.query(
        `SELECT 
          id
        FROM product_variants
        WHERE product_id = $1 AND color = $2 AND size = $3
        LIMIT 1;
        `, [id, color, size]
      )
      const productVariantId = productVariantFetch.rows.length > 0 ? productVariantFetch.rows[0].id : null

      await client.query(
        `INSERT INTO order_items
          (order_id, product_id, product_variant_id, quantity, price_at_purchase) VALUES ($1, $2, $3, $4, $5);
        `, [orderId, id, productVariantId, qty, price]
      )
    }
    
    await client.query('COMMIT')

    res.status(200).json({ message: 'Order successfully placed', orderId })

  } catch (err) {
    await client.query('ROLLBACK')
    console.error('Error in order transaction:', err)
    res.status(500).json({ error: 'Order failed', details: err.message })
  } finally {
    client.release()
  }
})

module.exports = router