const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const emailRoutes = require('./routes/emailRoutes.js')

dotenv.config();

const app = express()

// CORS configuration for production
const corsOptions = {
  origin: function (origin, callback) {
    console.log('Request from origin:', origin);
    
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    // Check if origin matches allowed patterns
    const allowedPatterns = [
      /^https:\/\/.*\.vercel\.app$/,  // All Vercel domains
      /^http:\/\/localhost:\d+$/,      // Local development
    ];
    
    // Check environment variable for specific domains
    if (process.env.FRONTEND_URL && process.env.FRONTEND_URL !== '*') {
      const allowedOrigins = process.env.FRONTEND_URL.split(',').map(url => url.trim());
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
    }
    
    // Check if origin matches any pattern
    const isAllowed = allowedPatterns.some(pattern => pattern.test(origin));
    
    if (isAllowed || process.env.FRONTEND_URL === '*') {
      callback(null, true);
    } else {
      console.log('CORS blocked for origin:', origin);
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
    res.json({
        message: 'email sender api running',
        status: 'ok',
        timestamp: new Date().toISOString(),
        emailConfigured: !!(process.env.EMAIL_USER && (process.env.EMAIL_PASS || process.env.EMAIL_PASSWORD))
    })
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`server is running at Port http://localhost:${PORT}`)
})