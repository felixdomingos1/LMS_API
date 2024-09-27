import { Request, Response } from "express";
import { CreatePagamentosUseCase } from "./CreatePagamentosUseCase";

class CreatePagamentosController {
  constructor(private createPagamentosUseCase: CreatePagamentosUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { cursoId, status_pagamento,usuarioId, valor } = req.body;
    
    const pagamentos = await this.createPagamentosUseCase.execute({ cursoId, status_pagamento,usuarioId, valor });

    return res.status(201).json(pagamentos);
  }
}

export { CreatePagamentosController };
