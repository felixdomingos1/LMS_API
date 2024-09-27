import { CursoRepository } from "../../../Curso/Repository/implements/CursoRepository"
import { UsuarioRepository } from "../../../Usuario/Repository/implements/UsuarioRepository"
import { ComentarioRepository } from "../../Repository/implements/ComentarioRepository"
import { CreateComentarioController } from "./CreateComentarioController"
import { CreateComentarioUseCase } from "./CreateComentarioUseCase"

const comentarioRepository = new ComentarioRepository()
const usuarioRepository = new UsuarioRepository()
const cursoRepository = new CursoRepository()
const createComentarioUseCase = new CreateComentarioUseCase(comentarioRepository, cursoRepository,usuarioRepository)
const createComentario = new CreateComentarioController(createComentarioUseCase)

export {createComentario}