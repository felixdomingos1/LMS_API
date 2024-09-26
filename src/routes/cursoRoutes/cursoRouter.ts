import { Router } from "express";
import { createCurso } from "../../modules/Curso/UseCases/CriarCurso";

const cursoRouter = Router()

cursoRouter.post(
    "/criar", 
    (req, res)=>{
        return createCurso.handle(req,res)
    }
)

// usuarioRouter.post(
//     "/login", 
//     (req, res)=>{
//         return session.handle(req,res)
//     }
// )

// usuarioRouter.get(
//     "/pegar/:id", 
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

export { cursoRouter };