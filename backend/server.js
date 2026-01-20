const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const emailRoutes = require('./routes/emailRoutes.js')

dotenv.config();

const app = express()

// CORS configuration for production
const corsOptions = {
  origin: process.env.FRONTEND_URL || '*',
  methods: ['GET', 'POST'],
  credentials: true
};

app.use(express.json())
app.use(cors(corsOptions))

app.use('/api/email', emailRoutes)

app.get('/', (req, res) => {
    res.json({message: 'email sender api running'})
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`server is running at Port http://localhost:${PORT}`)
})