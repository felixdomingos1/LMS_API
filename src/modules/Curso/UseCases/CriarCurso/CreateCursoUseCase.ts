import { ICreateCursoDTO, ICursoRepository } from '../../Repository/ICursoRepository';

class CreateCursoUseCase {
  constructor(private cursoRepository: ICursoRepository) {}

  async execute(data: ICreateCursoDTO) {
    const curso = await this.cursoRepository.create(data);
    return curso;
  }
}

export { CreateCursoUseCase };
