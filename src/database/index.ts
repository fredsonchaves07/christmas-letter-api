import { Connection, createConnection, getConnectionManager, getConnectionOptions } from 'typeorm'
import { Letter } from '../entity/Letter';

export default async(): Promise <Connection> => {
    try {
        const conection = process.env.NODE_ENV

        const defaultOptions = await getConnectionOptions();
    
        return createConnection(
            Object.assign(defaultOptions, {
                type: conection === 'test' ? "sqlite" : defaultOptions.type,
                database: conection === 'test' ? "./src/database/database.sqlite": defaultOptions.database,
                entities: [
                    Letter
                ],
                migrations: [
                    __dirname + "/migrations/**"
                ]
            })
        )
    } catch (exception) {
        console.log(`Error: ${exception.message}`)
    } 
    
}