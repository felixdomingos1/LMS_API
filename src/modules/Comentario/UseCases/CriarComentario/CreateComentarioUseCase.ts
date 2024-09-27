import { AppError } from '../../../../Error/AppError';
import { CursoRepository } from '../../../Curso/Repository/implements/CursoRepository';
import { UsuarioRepository } from '../../../Usuario/Repository/implements/UsuarioRepository';
import { ICreateComentarioDTO, IComentarioRepository } from '../../Repository/IComentarioRepository';

class CreateComentarioUseCase {
  constructor(
    private comentarioRepository: IComentarioRepository,
    private cursoRepository: CursoRepository,
    private usuarioRepository: UsuarioRepository
  ) {}

  async execute({usuarioId, cursoId, texto, status}: ICreateComentarioDTO) {
    const userExist = await this.usuarioRepository.findById(usuarioId)
    if (!userExist ) {
      throw new AppError('Usuario não Existe Para fazer o Pagamento', 404)
    }
    const cursoExist = await this.cursoRepository.findById(cursoId)
    if (!cursoExist ) {
      throw new AppError('Curso não Existe Para fazer o Pagamento', 404)
    }

    const comentario = await this.comentarioRepository.create({usuarioId, cursoId, texto, status});
    return comentario;
  }
}

export { CreateComentarioUseCase };
