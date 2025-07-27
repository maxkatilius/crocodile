const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

// Routes
app.use("/api/products", require("./routes/products"))
app.use("/api/contact", require("./routes/contact"))
app.use("/api/customer", require("./routes/customer"))
app.use("/api/order", require("./routes/order"))

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`)
})