import { Router } from 'express'
import { ChistmasLetterController } from './controllers/ChristmasLetterController' 

const router = Router()

const christmasLetter = new ChistmasLetterController()

router.get('/letter', christmasLetter.get)
router.post('/letter', christmasLetter.post)

export { router }