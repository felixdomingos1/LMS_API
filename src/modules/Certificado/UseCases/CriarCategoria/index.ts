import { CategoriaRepository } from "../../Repository/implements/CategoriaRepository"
import { CreateCategoriaController } from "./CreateCategoriaController"
import { CreateCategoriaUseCase } from "./CreateCategoriaUseCase"

const categoriaRepository = new CategoriaRepository()
const createCategoriaUseCase = new CreateCategoriaUseCase(categoriaRepository)
const createCategoria = new CreateCategoriaController(createCategoriaUseCase)

export {createCategoria}