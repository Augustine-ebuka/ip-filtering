import express, {NextFunction, Request, Response} from 'express' 
export const notfound = (req:Request, res:Response, next:NextFunction)=>{
    res.status(404).json({message:"page not found"})
    next()
}

