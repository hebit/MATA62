import { EntityRepository, Repository } from 'typeorm'
import {Flights} from '../entity/Flights'

@EntityRepository(Flights)
export class FlightsRepository extends Repository<Flights> {

}