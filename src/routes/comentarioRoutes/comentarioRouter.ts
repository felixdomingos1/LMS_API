import { Router } from "express";
import { createComentario } from "../../modules/Comentario/UseCases/CriarComentario";

const comentarioRouter = Router()

comentarioRouter.post(
    "/criar-comentario", 
    (req, res)=>{
        return createComentario.handle(req,res)
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

export { comentarioRouter };