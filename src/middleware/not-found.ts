import express, {Request, Response} from 'express' 
const notfound = (req: Request, res: Response)=> res.status(404).json({message: "page not found"})

export  default notfound
