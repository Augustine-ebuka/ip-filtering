import express, {Express, Request, Response, Application, NextFunction} from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import { IpFilter,IpDeniedError } from 'express-ipfilter';
import limitter from 'express-rate-limit'
import {notfound }from './middleware/not-found';
import auth from './middleware/auth'
import router from './router/router'
import errorHandler from './middleware/errorHandler';


dotenv.config();

const app: Application = express();
const port =process.env.PORT || 8000;

// ip to block
const ipss= ():string[] =>{
  return ['::1']
}
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
// set the filter
app.use(IpFilter(ipss,{
  mode:"deny",
}))
// set limiter
app.use(limitter({
  windowMs: 1 * 60 * 1000,
  limit:2,
  standardHeaders:'draft-7',
  legacyHeaders: false

}))


// error handling
if(app.get('env') === 'development'){
  app.use(errorHandler)
}


// route function
app.use('/', auth, router)

app.use(notfound)

app.listen(port,()=>{
    console.log(`listenening to ${port}`);
    
})




