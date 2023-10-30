import express, {Express, Request, Response, Application, NextFunction} from 'express';
import {IpDeniedError } from 'express-ipfilter';

const errorHandler = (err: any, req: Request, res: Response, next: NextFunction)=>{
    console.log("error handler");
    if (err instanceof IpDeniedError) {
      res.status(401).json({ message: "you shall not pass, your ip address has been blocked" });
    } else {
      res.status(err.status || 500).send("Internal Server Error");
    }
}


  
  export default errorHandler