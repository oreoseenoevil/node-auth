import express from 'express'
import Redis from 'ioredis'
import session from 'express-session'
import connectRedis  from 'connect-redis'
import dotenv from 'dotenv'

dotenv.config()
import { REDIS_OPTIONS, SESSION_OPTIONS, APP_PORT, connectDB } from './config'

connectDB()

const RedisStore = connectRedis(session)
const client = new Redis(REDIS_OPTIONS)

const app = express()

app.use(session({
  ...SESSION_OPTIONS,
  store: new RedisStore({ client }),
}))


app.get('/', (req, res) => res.json({ message: 'work' }))

app.listen(APP_PORT, () => console.log(`http://localhost:${APP_PORT}`))
