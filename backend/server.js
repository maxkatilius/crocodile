const dotenv = require('dotenv')
dotenv.config()

const express = require('express')
const app = express()
app.use(express.json())

const cors = require('cors')
const allowedOrigins = [
  "http://localhost:5172",
  "http://localhost:5173",
  "http://localhost:5174", // local host for testing
  "https://crocodile-mk.vercel.app", // deployed frontend
  "https://crocodile-mk.netlify.app",
]

app.use((req, res, next) => {
  console.log("🔍 Origin:", req.headers.origin)
  next()
})

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true)
    } else {
      console.log("❌ CORS blocked origin:", origin)
      callback(null, false)
    }
  },
  credentials: true,
}))

// Routes
app.use("/api/products", require("./routes/products"))
app.use("/api/contact", require("./routes/contact"))
app.use("/api/customer", require("./routes/customer"))
app.use("/api/order", require("./routes/order"))
app.get("/", (req, res) => {
  res.send("✅ Backend is running")
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`)
})