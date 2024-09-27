import { AppError } from '../../../../Error/AppError';
import { ICursoRepository } from '../../../Curso/Repository/ICursoRepository';
import { IUsuarioRepository } from '../../../Usuario/Repository/IUsuarioRepository';
import { ICreateProgressoCursoDTO, IProgressoCursoRepository } from '../../Repository/IProgressoCursoRepository';

class CreateProgressoCursoUseCase {
  constructor(
    private createProgressoCurso: IProgressoCursoRepository,
    private usuarioRepository: IUsuarioRepository,
    private cursoRepository: ICursoRepository

  ) {}


  async execute(data: ICreateProgressoCursoDTO) {

    const cursoExist = await this.cursoRepository.findById(data.cursoId)
    const usuarioExist = await this.usuarioRepository.findById(data.usuarioId)

    if (!usuarioExist) {
      throw new AppError('Usuario não Existe',404)
    }

    if (!cursoExist) {
      throw new AppError('Curso não Existe',404)
    }

    const progressoCurso = await this.createProgressoCurso.create(data);
    return progressoCurso;
  }
}

export { CreateProgressoCursoUseCase };
