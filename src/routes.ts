import { Router } from 'express'
import { ChistmasLetter } from './controllers/ChristmasLetter' 

const router = Router()

const christmasLetter = new ChistmasLetter()

router.get('/letter', christmasLetter.get)

export { router }