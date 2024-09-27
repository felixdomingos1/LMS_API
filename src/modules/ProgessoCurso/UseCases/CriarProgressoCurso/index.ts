import { CursoRepository } from "../../../Curso/Repository/implements/CursoRepository"
import { UsuarioRepository } from "../../../Usuario/Repository/implements/UsuarioRepository"
import { ProgressoCursoRepository } from "../../Repository/implements/ProgressoCursoRepository"
import { ProgressoCursoController } from "./CreateProgressoCursoController"
import { CreateProgressoCursoUseCase } from "./CreateProgressoCursoUseCase"

const  progressoCursoRepository= new ProgressoCursoRepository()
const cursoRepository = new CursoRepository()
const usuarioRepository = new UsuarioRepository()
const createProgressoCursoUseCase = new CreateProgressoCursoUseCase(progressoCursoRepository, usuarioRepository, cursoRepository)
const createProgressoCurso = new ProgressoCursoController(createProgressoCursoUseCase)

export {createProgressoCurso}