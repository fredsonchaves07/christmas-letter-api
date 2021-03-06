import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import { ChristmasLetterRepository } from '../repositories/ChristmasLetterRepository'

class ChistmasLetterController {

    async get(request: Request, response: Response){
        try {
            const christmasLetterRepository = getCustomRepository(ChristmasLetterRepository)

            const listLetter = await christmasLetterRepository.find()

            if(!listLetter){
                return response.status(404).json({
                    'message': 'error 404! data not found!'
                })
            }

            return response.status(200).json(listLetter)
        } catch (exception) {
            console.log(`Error: ${exception.message}`)
        }
        
    }

    async post(request: Request, response: Response){
        try {
            const { sender, message } = request.body

            if(!sender || !message){
                return response.status(400).json({
                    'message': 'error 400! request invalid!'
                })
            }
        
            const christmasLetterRepository = getCustomRepository(ChristmasLetterRepository)
    
            const letter = christmasLetterRepository.create({
                sender,
                message
            })
    
            await christmasLetterRepository.save(letter)
    
            return response.status(201).json(letter)
        } catch (exception) {
            console.log(`Error: ${exception.stack}`)
        }
    }
}

export { ChistmasLetterController }