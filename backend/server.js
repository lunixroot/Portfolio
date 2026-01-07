const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const emailRoutes = require('./routes/emailRoutes.js')

dotenv.config();

const app = express()

app.use(express.json())
app.use(cors())

app.use('/api/email', emailRoutes)

app.get('/', (req, res) => {
    res.json({message: 'email sender api running'})
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`server is running at Port http://localhost:${PORT}`)
})