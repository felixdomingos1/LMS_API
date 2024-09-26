import { Request, Response } from "express";
import { GetCursoUseCase } from "./PegarCursoCasosDeUso";

class GetCursoController {
    constructor(private getCursoUseCase : GetCursoUseCase){}
    async handle(req:Request, res:Response) : Promise<Response>{
        const {id} = req.params
        const Curso = await this.getCursoUseCase.execute(Number(id))
        return res.status(200).json(Curso)
    }
}

export {GetCursoController}