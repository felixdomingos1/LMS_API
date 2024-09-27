import { ProgressoCursoRepository } from "../../Repository/implements/ProgressoCursoRepository"
import { ProgressoCursoController } from "./CreateProgressoCursoController"
import { CreateProgressoCursoUseCase } from "./CreateProgressoCursoUseCase"

const  progressoCursoRepository= new ProgressoCursoRepository()
const createProgressoCursoUseCase = new CreateProgressoCursoUseCase(progressoCursoRepository)
const createProgressoCurso = new ProgressoCursoController(createProgressoCursoUseCase)

export {createProgressoCurso}