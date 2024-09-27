import { Request, Response } from "express";
import { CreateCategoriaUseCase } from "./CreateCategoriaUseCase";

class CreateCategoriaController {
  constructor(private createCategoriaUseCase: CreateCategoriaUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { nome } = req.body;

    const categoria = await this.createCategoriaUseCase.execute({ nome });

    return res.status(201).json(categoria);
  }
}

export { CreateCategoriaController };
