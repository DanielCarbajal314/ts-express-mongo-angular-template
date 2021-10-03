import { ValidationChain, validationResult } from "express-validator";
import { Express } from 'express';

export function configurePostWithValidation(app:Express, route:string, validationChain:ValidationChain[], callback:(body:any)=>Promise<any> ) {
    app.post(route, ...validationChain, async (req,res)=> {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        }
        res.json(await callback(req.body));
    });
}