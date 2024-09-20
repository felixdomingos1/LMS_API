import { Request, Response } from "express";
import { CreateSessionUseCase } from "./IniciarSessaoCasoDeUso";
import createUsuarioSession from "../../../../schemas/createSession";
import { AppError } from "../../../../Error/AppError";

class CreateSessionController{
    constructor(private createSessionUseCase:CreateSessionUseCase){}

    async handle(req:Request, res:Response) : Promise<Response>{
        const {email, senha} = req.body
        const validate = await createUsuarioSession.isValid({email, senha})

        if(!validate) throw new AppError("Erro na validação. Verifique os dados!", 400)
        
        const   session = await this.createSessionUseCase.execute(email, senha)

        return res.status(200).json(session)
    }

}

export {CreateSessionController}