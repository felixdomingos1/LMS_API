import { AppError } from '../../../../Error/AppError';
import { CursoRepository } from '../../../Curso/Repository/implements/CursoRepository';
import { UsuarioRepository } from '../../../Usuario/Repository/implements/UsuarioRepository';
import { ICreateCertificadoDTO, ICertificadoRepository } from '../../Repository/ICertificadoRepository';
import { CertificadoService } from '../CertificadoService/CertificadoService';

class CreateCertificadoUseCase {
  constructor(
    private certificado: ICertificadoRepository,
    private cursoRepository: CursoRepository,
    private usuarioRepository: UsuarioRepository,
    private certificadoService: CertificadoService
  ) {}

  async execute({cursoId, usuarioId,  usuarioNome, cursoNome}: ICreateCertificadoDTO) {
    const certificado_urlCreated = await this.certificadoService.generateAndUploadCertificado({
      usuarioId,
      cursoId,
    });

    const userExist = await this.usuarioRepository.findById(usuarioId)
    if (!userExist ) {
      throw new AppError('Usuario não Existe Para fazer o Pagamento', 404)
    }
    const cursoExist = await this.cursoRepository.findById(cursoId)
    if (!cursoExist ) {
      throw new AppError('Curso não Existe Para fazer o Pagamento', 404)
    }

    const certificado = await this.certificado.create({ cursoId, usuarioId, cursoNome, usuarioNome, certificado_url:certificado_urlCreated});
    return certificado;
  }
}

export { CreateCertificadoUseCase };
