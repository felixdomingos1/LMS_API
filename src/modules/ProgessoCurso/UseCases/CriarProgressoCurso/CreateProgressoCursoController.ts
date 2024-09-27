import { Request, Response } from "express";
import { CreateProgressoCursoUseCase } from "./CreateProgressoCursoUseCase";

class ProgressoCursoController {
  constructor(private createProgressoCursoUseCase: CreateProgressoCursoUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const {  cursoId,progresso,usuarioId  } = req.body;

    const progressoCurso = await this.createProgressoCursoUseCase.execute({  cursoId,progresso,usuarioId  });

    return res.status(201).json(progressoCurso);
  }
}

export { ProgressoCursoController };
