const dotenv = require('dotenv')
dotenv.config()

const express = require('express')
const app = express()
app.use(express.json())

const cors = require('cors')
app.use(cors({
  origin: [
    "http://localhost:5174",  // local dev
    "https://crocodile-mk.vercel.app", // deployed frontend
  ],
  credentials: true,
}))

// Routes
app.use("/api/products", require("./routes/products"))
app.use("/api/contact", require("./routes/contact"))
app.use("/api/customer", require("./routes/customer"))
app.use("/api/order", require("./routes/order"))
app.get("/", (req, res) => {
  res.send("✅ Backend is running");
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`)
})