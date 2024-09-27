import { ICreateCategoriaDTO, ICategoriaRepository } from '../../Repository/ICategoriaRepository';

class CreateCategoriaUseCase {
  constructor(private categoriaRepository: ICategoriaRepository) {}

  async execute(data: ICreateCategoriaDTO) {
    const categoria = await this.categoriaRepository.create(data);
    return categoria;
  }
}

export { CreateCategoriaUseCase };
