import { EntityRepository, Repository } from 'typeorm';
import { Letter } from '../entity/Letter'

@EntityRepository(Letter)
class ChristmasLetterRepository extends Repository<Letter> {}

export { ChristmasLetterRepository }