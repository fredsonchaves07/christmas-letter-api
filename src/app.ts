import 'reflect-metadata'
import express from 'express'
import createConnection from './database'
import { router } from './routes'

const app = express()

createConnection().then(async () => {
    app.use(express.json())
    app.use(router)

    app.listen(5000, () => {
        console.log('Server is Runnning')
    })
})

export { app }







