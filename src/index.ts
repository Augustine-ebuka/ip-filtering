import express, {Express, Request, Response, Application, NextFunction} from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import notfound from './middleware/not-found';
import auth from './middleware/auth'


dotenv.config();

const app: Application = express();
const port =process.env.PORT || 8000;

app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

// app.use(auth)

app.get('/',auth, (req:Request|any,  res:Response)=>{
    const {user:{userId, username}} = req
    res.status(200).json({message:"welcome to ip filtering middlware, developed by hebrus ", user:{userId,username}})
})

// middlewares
app.use(notfound)

app.listen(port,()=>{
    console.log(`listenening to ${port}`);
    
})
