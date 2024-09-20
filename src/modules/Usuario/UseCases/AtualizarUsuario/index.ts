import { UsuarioRepository } from "../../Repository/implements/UsuarioRepository";
import { UpdateUsuarioController } from "./AtualizarUsuarioController";
import { UpdateUsuarioUseCase } from "./AtualizarUsuarioCasosDeUso";

const usuarioRepository= new UsuarioRepository()
const updateUsuarioUseCase = new UpdateUsuarioUseCase(usuarioRepository)
const atualizarUsuario = new UpdateUsuarioController(updateUsuarioUseCase)

export {atualizarUsuario}