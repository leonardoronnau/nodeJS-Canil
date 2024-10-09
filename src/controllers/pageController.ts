import { Request, Response } from "express";

export const home = (req:Request, res:Response)=>{
res.render('pages/page', {
    banner : {
        title : 'Todos os animais',
        backGround: 'allanimals.jpg'

    }
})
}
export const dogs = (req:Request, res:Response)=>{
    res.render('pages/page', {
        banner : {
            title : 'Cachorros',
            backGround: 'banner_dog.jpg'
    
        }
    })
}
export const cats = (req:Request, res:Response)=>{
    res.render('pages/page', {
        banner : {
            title : ' Gatos ',
            backGround: 'banner_cat.jpg'
    
        }
    })
}
export const fishes = (req:Request, res:Response)=>{
    res.render('pages/page', {
        banner : {
            title : 'Peixes',
            backGround: 'banner_fish.jpg'
    
        }
    })
}
