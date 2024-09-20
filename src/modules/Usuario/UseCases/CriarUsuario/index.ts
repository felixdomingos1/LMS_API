import { UsuarioRepository } from "../../Repository/implements/UsuarioRepository";
import { CreteUsuarioController } from "./CriarUsuarioController";
import { CreateUsuarioUseCase } from "./CriarUsuarioCasosDeUso";

const usuarioRepository= new UsuarioRepository()
const createUsuarioUseCase = new CreateUsuarioUseCase(usuarioRepository)
const criarUsuario = new CreteUsuarioController(createUsuarioUseCase)

export {criarUsuario}