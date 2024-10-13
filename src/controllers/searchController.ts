import {  Response, Request} from "express";
import { title } from "process";
import { Pet } from "../models/pet";
import { createMenuObject } from "../helpers/createMenuObject";

export  const search = (req: Request, res: Response) => {
let query: string = req.query.q as string


    let list = Pet.getfromName(query)
    res.render('pages/page', {
        menu: createMenuObject(''),
        
        list,
        query
    })
}