import express,{ Request, Response } from "express";

const router = express.Router()



router.get('/home',(req:Request|any,  res:Response)=>{

    const {user:{userId, username,message}} = req
    // console.log(req)
    res.status(200).json(
        {message:`welcome to ip filtering middlware, developed by ${username}` ,
        user:{
            userId,
            username,
            message:req.ip
        }})
})


// app.all('/secret', (req, res, next) => {
//     console.log('Accessing the secret section ...')
//     next() // pass control to the next handler
//   })


//   match anything a
// app.get(/a/, (req, res) => {
//     res.send('/a/')
//   })
  
// not-found middleware

export default router