import { UsuarioRepository } from "../../Repository/implements/UsuarioRepository";
import { GetUsuarioController } from "./PegarUsuarioController";
import { GetUsuarioUseCase } from "./PegarUsuarioCasosDeUso";

const usuarioRepository= new UsuarioRepository()
const getUsuarioUseCase = new GetUsuarioUseCase(usuarioRepository)
const pegarUsuario = new GetUsuarioController(getUsuarioUseCase)

export {pegarUsuario}