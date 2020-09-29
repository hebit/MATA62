import { Router, Request, Response } from 'express'
import flightsRouter from './controller/FlightsController'

const routes = Router()

routes.get('/hello', async (request: Request, response: Response) => {
        return response.json({ message: "Hello World"}) 
})

routes.use('/', flightsRouter)

export default routes;