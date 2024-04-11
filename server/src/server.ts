import express from 'express'
import { Request, Response } from 'express'
import cors from 'cors'
import {pool} from './db/db'

const app = express();

app.use(cors())
app.use(express.json())

// add new shrum
app.post('/', (req: Request, res: Response) => {
    try {
        
    } catch (err) {
        
    }
})

// get all shrums
app.get('/', (req: Request, res: Response) => {
    try {
        
    } catch (err) {
        
    }
})

// get one shrum
app.get('/:id', (req: Request, res: Response) => {
    try {
        
    } catch (err) {
        
    }
})

// update a shrum
app.put("/:id", (req: Request, res: Response) => {
    try {
        
    } catch (err) {
        
    }
})

// delete shrum
app.delete('/:id', (req: Request, res: Response) => {
    try {
        
    } catch (err) {
        
    }
})

// 
const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})