import { CursoRepository } from "../../Repository/implements/CursoRepository";
import { CreateCursoController } from "./CreateController";
import { CreateCursoUseCase } from "./CreateCursoUseCase";

const cursoRepository = new CursoRepository()
const createCursoUseCase = new CreateCursoUseCase(cursoRepository)
const createCurso = new CreateCursoController(createCursoUseCase)

export {createCurso}