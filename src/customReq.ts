import { Request } from "express";
import userInterface from './interface/user.interface'

declare module 'express'{
    interface Request{
        user:userInterface
    }
}