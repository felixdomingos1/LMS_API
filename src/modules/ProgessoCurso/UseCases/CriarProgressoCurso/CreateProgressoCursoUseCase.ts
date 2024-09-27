import { ICreateProgressoCursoDTO, IProgressoCursoRepository } from '../../Repository/IProgressoCursoRepository';

class CreateProgressoCursoUseCase {
  constructor(private createProgressoCurso: IProgressoCursoRepository) {}

  async execute(data: ICreateProgressoCursoDTO) {
    const progressoCurso = await this.createProgressoCurso.create(data);
    return progressoCurso;
  }
}

export { CreateProgressoCursoUseCase };
