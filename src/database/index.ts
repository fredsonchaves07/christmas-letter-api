import {Connection, createConnection, getConnectionManager, getConnectionOptions} from 'typeorm'

export default async(): Promise <Connection> => {
    const conection = process.env.NODE_ENV

    const defaultOptions = await getConnectionOptions();
    
    return createConnection(
        Object.assign(defaultOptions, {
            type: conection === 'test' ? "sqlite" : defaultOptions.type,
            database: conection === 'test' ? "./src/database/database.sqlite": defaultOptions.database,
        })
    )
}