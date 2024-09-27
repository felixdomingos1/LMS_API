import { Router } from "express";
import { createProgressoCurso } from "../../modules/ProgessoCurso/UseCases/CriarProgressoCurso";
const progressoCursoRouter = Router()

progressoCursoRouter.post(
    "/criar-progresso", 
    (req, res)=>{
        return createProgressoCurso.handle(req,res)
    }
)

 
// usuarioRouter.get(
//     "/pegar-pagamentos/:id", 
//     (req, res)=>{
//         return pegarUsuario.handle(req,res)
//     }
// )

// usuarioRouter.put(
//     "/atualizar/:id", 
//     (req, res)=>{
//         return atualizarUsuario.handle(req,res)
//     }
// )

// usuarioRouter.delete(
//     "/apagar/:id", 
//     (req, res)=>{
//         return eliminarUsuario.handle(req,res)
//     }
// )

export { progressoCursoRouter };