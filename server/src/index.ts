import dotenv from 'dotenv'
dotenv.config()

import cookieParser from 'cookie-parser'
import cors from 'cors'
import express, { request } from 'express'
import config from './config.json' with { type: 'json' }

const app = express()
app.use(
  cors({
    origin: config.FRONTEND_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  })
)

app.use(express.json())
app.use(cookieParser())

app.get('/api', (_, res) => {
  res.status(200).json({
    message: 'OK!',
    answer: true,
  })
})

const port = config.SERVER_PORT || 8000
app.listen(port, () => console.log(`Server listening on port ${port}`))
