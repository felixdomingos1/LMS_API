import { UsuarioRepository } from "../../Repository/implements/UsuarioRepository";
import { CreateSessionController } from "./IniciarSessaoController";
import { CreateSessionUseCase } from "./IniciarSessaoCasoDeUso";

const usuarioRepository = new UsuarioRepository()
const createSessionUseCase = new CreateSessionUseCase(usuarioRepository)
const session = new CreateSessionController(createSessionUseCase)

export {session}