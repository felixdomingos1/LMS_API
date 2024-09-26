import { CursoRepository } from "../../Repository/implements/CursoRepository";
import { GetCursoController } from "./PegarCursoController";
import { GetCursoUseCase } from "./PegarCursoCasosDeUso";

const cursoRepository= new CursoRepository()
const getCursoUseCase = new GetCursoUseCase(cursoRepository)
const pegarCursos = new GetCursoController(getCursoUseCase)

export {pegarCursos}