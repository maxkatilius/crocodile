const express = require("express")
const router = express.Router()
const pool = require("../db")

// Handle request for ALL products
router.get('/', async (req, res) => {

  try {
    const result = await pool.query(
      `SELECT 
        id,
        title,
        description,
        price,
        display_image AS "displayImage"
      FROM products;`,
    )
    res.status(201).json({ message: 'All products', data: result.rows })
  } catch (err) {
    console.error('Error retrieving products:', err);
    res.status(500).json({ error: 'Fetching products data failed', code: err.code, detail: err.message });
  }
})

// Handle request for specific product data
router.get('/:id', async (req, res) => {
  const { id } = req.params

  try {
    const productResult = await pool.query(
      `SELECT 
        id, 
        title, 
        description, 
        price, 
        display_image AS "displayImage"
      FROM products 
        WHERE id = $1;
      `, [id]
    )
    
    if (productResult.rows.length === 0) {
      return res.status(404).json({ error: 'Product not found' })
    }
    const product = productResult.rows[0]

    const extraImagesResult = await pool.query(`
      SELECT 
        image_url, 
        color 
      FROM product_images 
        WHERE product_id = $1;
      `, [id]
    )

    const images = {}
    
    extraImagesResult.rows.forEach(row => {
      const color = row.color || 'default'
      if (!images[color]) {
        images[color] = []
      }
      images[color].push(row.image_url)
    })

    const colors = []
    for (const color in images) {
      if (color !== "default") colors.push(color)
    }

    const variantResult = await pool.query(`
      SELECT 
        size
      FROM product_variants
        WHERE product_id = $1
      GROUP BY size
      ORDER BY MIN(id) ASC;
      `, [id]
    )

    const sizes = variantResult.rows.map(row => row.size).filter(Boolean)

    const productData = {
      id: product.id,
      title: product.title,
      price: product.price,
      description: product.description,
      displayImage: product.displayImage,
      images: images,
      ...(colors.length > 0 ? { colors: colors }: {}),
      ...(sizes.length > 0 ? { sizes: sizes }: {})
    }

    res.status(200).json({ message: `Product details for product_id: ${id}`, data: productData })

  } catch (err) {
    console.error('Error retrieving product:', err);
    res.status(500).json({ error: 'Fetching product data failed', code: err.code, detail: err.message });
  }
})

module.exports = router