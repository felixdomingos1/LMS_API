import { Request, Response } from "express";
import { DeleteUsuarioUseCase } from "./EliminarUsuarioUseCase";
import { AppError } from "../../../../Error/AppError";

class DeleteUsuarioController {
  constructor(private deleteUsuarioUseCase: DeleteUsuarioUseCase) {}

  async handle(req:Request, res: Response): Promise<Response> {
    const { id } = req.params;
    
    if (!id || isNaN(Number(id))) {
      throw new AppError('ID inválido', 400);
    }
    
    try {
      const usuario = await this.deleteUsuarioUseCase.execute(Number(id));
      return res.status(200).json({ message: "Usuário deletado com sucesso!", usuario });
    } catch (error:any) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export { DeleteUsuarioController };