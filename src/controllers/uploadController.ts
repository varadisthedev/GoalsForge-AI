import type{Request,Response} from "express"
import {pool} from "../db.ts"
import multer from "multer"

// const log = `console.log(chalk.${color}("${content}"))`

export const checkController = (req:Request,res:Response):void=>{
    try {
        
        res.json({
            message:"controller working"
        })
    }
    catch(err:any){
        console.error("CONTROLLER NOT RUNNING",err.message)
    }
}
