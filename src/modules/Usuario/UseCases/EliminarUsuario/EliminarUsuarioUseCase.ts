import { UsuarioRepository } from "../../Repository/implements/UsuarioRepository";
import { AppError } from "../../../../Error/AppError";

class DeleteUsuarioUseCase {
  constructor(private usuarioRepository: UsuarioRepository) {}
  async execute(id: number | null) {
    if (!id) {
      throw new AppError('ID de usuário inválido', 400);
    }
    
    const usuario = await this.usuarioRepository.findById(id);
    if (!usuario) {
      throw new AppError('Usuário não encontrado', 404);
    }

    const deletado = await this.usuarioRepository.deleteUsuario(id);
    return deletado;
  }
}

export { DeleteUsuarioUseCase };