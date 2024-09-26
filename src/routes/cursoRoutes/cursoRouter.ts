import { Router } from "express";
import { createCurso } from "../../modules/Curso/UseCases/CriarCurso";
import { pegarCursos } from "../../modules/Curso/UseCases/PegarCurso";

const cursoRouter = Router()

cursoRouter.post(
    "/criar", 
    (req, res)=>{
        return createCurso.handle(req,res)
    }
)
 
cursoRouter.get(
    "/pegar-curso/:id", 
    (req, res)=>{
        return pegarCursos.handle(req,res)
    }
)

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