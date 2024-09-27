import { Pagamento } from '@prisma/client';
import { ICreatePagamentoDTO, IPagamentoRepository } from '../../Repository/IPagamentosRepository';
import { UsuarioRepository } from '../../../Usuario/Repository/implements/UsuarioRepository';
import { AppError } from '../../../../Error/AppError';
import { CursoRepository } from '../../../Curso/Repository/implements/CursoRepository';

class CreatePagamentosUseCase {
  constructor(
    private pagamentoRepository: IPagamentoRepository,
    private cursoRepository: CursoRepository,
    private usuarioRepository: UsuarioRepository

  ) {}
  
  async execute(data: ICreatePagamentoDTO) {

    const userExist = await this.usuarioRepository.findById(data.usuarioId)
    if (!userExist ) {
      throw new AppError('Usuario não Existe Para fazer o Pagamento', 404)
    }
    
    const cursoExist = await this.cursoRepository.findById(data.cursoId)
    if (!cursoExist ) {
      throw new AppError('Curso não Existe Para fazer o Pagamento', 404)
    }

    const pagamento = await this.pagamentoRepository.create(data);
    return pagamento;
  }
}

export { CreatePagamentosUseCase };
