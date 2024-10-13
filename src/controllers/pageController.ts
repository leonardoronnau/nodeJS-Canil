import { Request, Response } from "express";
import { createMenuObject } from "../helpers/createMenuObject";

export const home = (req:Request, res:Response)=>{
res.render('pages/page', {
    menu: createMenuObject('all'),
    banner : {
        title : 'Todos os animais',
        backGround: 'allanimals.jpg'

    }
})
}
export const dogs = (req:Request, res:Response)=>{
    res.render('pages/page', {
        menu: createMenuObject('dog'),
        banner : {
            title : 'Cachorros',
            backGround: 'banner_dog.jpg'
    
        }
    })
}
export const cats = (req:Request, res:Response)=>{
    res.render('pages/page', {
        menu: createMenuObject('cat'),
        banner : {
            title : ' Gatos ',
            backGround: 'banner_cat.jpg'
    
        }
    })
}
export const fishes = (req:Request, res:Response)=>{
    res.render('pages/page', {
        menu: createMenuObject('fish'),
        banner : {
            title : 'Peixes',
            backGround: 'banner_fish.jpg'
    
        }
    })
}
