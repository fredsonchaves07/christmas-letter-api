import { Request, Response } from 'express'

class ChistmasLetter {

    async get (request: Request, response: Response){
        
        return response.json({
            'message': 'Cartinha de Natal'
        })
    }
}

export { ChistmasLetter }