import { CursoRepository } from "../../../Curso/Repository/implements/CursoRepository"
import { UsuarioRepository } from "../../../Usuario/Repository/implements/UsuarioRepository"
import { PagamentoRepository } from "../../Repository/implements/PagamentosRepository"
import { CreatePagamentosController } from "./CreatePagamentosController"
import { CreatePagamentosUseCase } from "./CreatePagamentosUseCase"

const pagamentoRepository = new PagamentoRepository()
const usuarioRepository = new UsuarioRepository()
const cursoRepository = new CursoRepository()
const createPagamentosUseCase = new CreatePagamentosUseCase(pagamentoRepository,cursoRepository,usuarioRepository)
const createPagamento = new CreatePagamentosController(createPagamentosUseCase)

export {createPagamento}