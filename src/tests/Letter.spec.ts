import request from 'supertest'
import { getConnection } from 'typeorm'
import { app } from '../app'
import createConnection from '../database'

describe('Letter', () => {
    beforeAll(async () => {
        await (await createConnection()).runMigrations()
    })

    afterAll(async () => {
        const connection = getConnection()
        await connection.dropDatabase()
        await connection.close()
    })

    it('Should be albe to create a new letter', async () => {
        const response = await request(app).post('/letter').send({
            sender: 'test sender',
            message: "Querido Papai noel, esta é uma cartinha test :)"
        })

        expect(response.status).toBe(201)
    })

    it('You should not be able to create a new letter with body inconsistencies', async () => {
        const response = await request(app).post('/letter').send({
            sender: 'test :(',
        })

        expect(response.status).toBe(400)
    })

    it('Should be able to get all letter', async () => {
        const response = await request(app).get('/letter')

        expect(response.status).toBe(200)
    })
})

