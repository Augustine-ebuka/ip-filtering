import express, {NextFunction, Request, Response} from 'express' 
import User from '../interface/user.interface'


const auth = (req:Request | any, res:Response, next:NextFunction) => {
        req.user = {
           userId:"123",
           username:"hebrus"
        }  
        next()

}
export default auth
