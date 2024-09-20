import { UsuarioRepository } from "../../Repository/implements/UsuarioRepository";
import { DeleteUsuarioController } from "./EliminarUsuarioController";
import { DeleteUsuarioUseCase } from "./EliminarUsuarioUseCase";

const usuarioRepository = new UsuarioRepository()
const eliminarUsuarioUseCase = new DeleteUsuarioUseCase(usuarioRepository)
const eliminarUsuario = new DeleteUsuarioController(eliminarUsuarioUseCase)

export {eliminarUsuario}