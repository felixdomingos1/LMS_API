import { IUsuarioRepository, IUpdateUsuarioUseCaseDTO } from '../../Repository/IUsuarioRepository';
import { hash } from 'bcrypt';
import { AppError } from '../../../../Error/AppError';

class UpdateUsuarioUseCase {
  constructor(private usuarioRepository: IUsuarioRepository) {}

  async execute({
    nome,
    email,
    senha,
    telefone,
  }: IUpdateUsuarioUseCaseDTO, id: number): Promise<void> {
    const usuario = await this.usuarioRepository.findById(id);
    if (!usuario) {
      throw new AppError('Usuário não encontrado', 404);
    }

    const emailAlreadyInUse = await this.usuarioRepository.findByEmail(email);
    if (emailAlreadyInUse && emailAlreadyInUse.id !== id) {
      throw new AppError('Não podes atualizar este usuário', 400);
    }
    if (!usuario || Array.isArray(usuario)) {
        throw new AppError('Usuário não encontrado', 404);
    }

    let senhaHash = usuario.senha_hash;
    if (senha) {
      senhaHash = await hash(senha, 8);
    }

    await this.usuarioRepository.update({
      id,
      nome,
      email,
      senha_hash: senhaHash,
      telefone,
    });
  }
}

export { UpdateUsuarioUseCase };