const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const emailRoutes = require('./routes/emailRoutes.js')

dotenv.config();

const app = express()

// CORS configuration for production
const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    const allowedOrigins = process.env.FRONTEND_URL 
      ? process.env.FRONTEND_URL.split(',')
      : ['*'];
    
    if (allowedOrigins.includes('*') || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'OPTIONS'],
  credentials: true,
  optionsSuccessStatus: 200
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