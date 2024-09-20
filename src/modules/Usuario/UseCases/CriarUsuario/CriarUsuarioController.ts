import { Request, Response } from "express";
import { CreateUsuarioUseCase } from "./CriarUsuarioCasosDeUso";
import usuarioEsquema from "../../../../schemas/createUser";
 
class CreteUsuarioController {
    constructor (private createUsuarioUseCase : CreateUsuarioUseCase){}
    async handle(req:Request, res:Response) : Promise<Response> {
        // const img = req.file
        const {nome, email, telefone, senha } = req.body
        const validedSchima = await usuarioEsquema.isValid({nome, email, senha, telefone})

        if (!validedSchima) {
            throw new Error("Dados inválidos! Verifique os dados e envie corretamente");
        } 
        const usuario = await this.createUsuarioUseCase.execute({nome, email, telefone, senha})
        return res.status(201).json(usuario)
    }
}

export {CreteUsuarioController}