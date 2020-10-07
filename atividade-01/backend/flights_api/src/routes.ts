import { Router, Request, Response, response } from "express";
import FlightController from "./controller/FlightsController";

const routes = Router();

routes.get("/years/:year", FlightController.getYear);
routes.get("/stats", FlightController.stats);

export default routes;
