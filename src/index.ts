import express, {Express, Request, Response, Application} from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Application = express();
const port =process.env.PORT || 8000;

app.get('/home', (req:Request,  res:Response)=>{
    res.send("welcome home")
})

app.listen(port,()=>{
    console.log(`listenening to ${port}`);
    
})
