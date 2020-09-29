import { Request, Response, Router } from 'express'
import { getRepository, getCustomRepository } from 'typeorm'
import { Flights } from '../entity/Flights'
import Parser from 'csv-parse'
import { FSWatcher, fstat, readFile, fsync } from 'fs'
import fsPromises from 'fs'
import path, { delimiter } from 'path'

const flightsRouter = Router()

//ler files//
const file = path.join(__dirname, '../../data/VRA_2015_01.csv')
const csvData = []

flightsRouter.get('/', async(request: Request, response: Response) => {
    const flights = getRepository(Flights)

    fsPromises.createReadStream(file).pipe(Parser({delimiter: ';'})).on('data', row => {
        
        flights.save({
            SG_EMPRESA_ICAO: row[0].toString(),
            NR_VOO: row[1].toString(),
            CODIGO_DI: row[2].toString(),
            CODIGO_TIPO_LINHA: row[3].toString(), 
            SG_AEROPORTO_ORIGEM_ICAO: row[4].toString(),
            SG_AEROPORTO_DESTINO_ICAO: row[5].toString(),
            PARTIDA_PREVISTA: row[6].toString(),
            PARTIDA_REAL: row[7].toString(), 
            CHEGADA_PREVISTA: row[8].toString(),
            CHEGADA_REAL: row[9].toString(),
            SITUACAO: row[10].toString(),
            CODIGO_JUSTIFICATIVA: row[11].toString()

         })

    })

    response.json({ voos: "ok" })

})


export default flightsRouter;