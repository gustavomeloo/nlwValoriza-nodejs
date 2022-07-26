import express from 'express'
import "reflect-metadata"

import {router} from './routes'

const app = express();

import './database/data-source'

app.use(express.json())
app.use(router)
app.listen(3000, () => console.log("Server is running"))