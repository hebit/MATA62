import "reflect-metadata";
// import { createConnection } from 'typeorm'
import express from "express";
import bodyParser from "body-parser";
import routes from "./routes";

const cors = require('cors')

const app = express();
app.use(cors())

app.use(bodyParser.json());
app.use(routes);

app.listen(3333);
