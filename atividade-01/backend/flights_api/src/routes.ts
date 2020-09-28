import { Router, Request, Response } from 'express'

const routes = Router()

routes.get('/', async (request: Request, response: Response) => {
    try {
        return response.json({ message: "Hello World"})
        
    } catch (error) {
        return response.json({ message: error })   
    }
})

export default routes;