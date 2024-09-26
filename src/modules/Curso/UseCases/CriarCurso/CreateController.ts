import { Request, Response } from "express";
import { CreateCursoUseCase } from "./CreateCursoUseCase";

class CreateCursoController {
  constructor(private createCursoUseCase: CreateCursoUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { titulo, descricao, preco, conteudo, imagem_capa, categoria } = req.body;

    const curso = await this.createCursoUseCase.execute({
        titulo,
        descricao,
        preco,
        conteudo,
        imagem_capa,
        categoria,
    });

    return res.status(201).json(curso);
  }
}

export { CreateCursoController };
