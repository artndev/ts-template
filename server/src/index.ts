import dotenv from 'dotenv'
dotenv.config()

import cookieParser from 'cookie-parser'
import cors from 'cors'
import express from 'express'
import config from './config.json' with { type: 'json' }
import articles from './routers/test.js'

const app = express()
app.use(
  cors({
    origin: config.FRONTEND_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  })
)

// app.use((_, res, next) => {
//   res.append('Access-Control-Allow-Headers', '*')
//   next()
// })

app.use(express.json())
app.use(cookieParser())

app.use('/api', articles)

const port = config.SERVER_PORT || 8000
app.listen(port, () => console.log(`Server listening on port ${port}`))
