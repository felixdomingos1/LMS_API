import { CursoRepository } from "../../../Curso/Repository/implements/CursoRepository"
import { UsuarioRepository } from "../../../Usuario/Repository/implements/UsuarioRepository"
import { CertificadoRepository } from "../../Repository/implements/CertificadoRepository"
import { CertificadoService } from "../CertificadoService/CertificadoService"
import { CreateCertificadoController } from "./CreateCertificadoController"
import { CreateCertificadoUseCase } from "./CreateCertificadoUseCase"

const certificadoRepository = new CertificadoRepository()
const usuarioRepository = new UsuarioRepository()
const cursoRepository = new CursoRepository()
const certificadoService = new CertificadoService();
const createCertificadoUseCase = new CreateCertificadoUseCase(certificadoRepository, cursoRepository, usuarioRepository,certificadoService)
const createCertificado = new CreateCertificadoController(createCertificadoUseCase, certificadoService)

export {createCertificado}