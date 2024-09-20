import { Request, Response } from "express";
import { UpdateUsuarioUseCase } from "./AtualizarUsuarioCasosDeUso";

class UpdateUsuarioController {
  constructor(private updateUsuarioUseCase: UpdateUsuarioUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params; 
    const { nome, email, senha, telefone } = req.body;
    await this.updateUsuarioUseCase.execute(
      { nome, email, senha, telefone},
      Number(id)
    );

    return res.status(200).json({ message: "Usuário atualizado com sucesso!" });
  }
}

export { UpdateUsuarioController };