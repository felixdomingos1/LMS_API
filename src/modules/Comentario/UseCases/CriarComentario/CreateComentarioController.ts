import { Request, Response } from "express";
import { CreateComentarioUseCase } from "./CreateComentarioUseCase";

class CreateComentarioController {
  constructor(private createComentarioUseCase: CreateComentarioUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const {usuarioId, cursoId, texto, status}= req.body;

    const comentario = await this.createComentarioUseCase.execute({usuarioId, cursoId, texto, status});

    return res.status(201).json(comentario);
  }
}

export { CreateComentarioController };
