import { Request, Response } from "express";

export const home = (req:Request, res:Response)=>{
res.send('1')
}
export const dogs = (req:Request, res:Response)=>{
    res.send('2')
}
export const cats = (req:Request, res:Response)=>{
    res.send('13')
}
export const fishes = (req:Request, res:Response)=>{
    res.send('41')
}
