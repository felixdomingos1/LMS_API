import { Router } from "express";
import { createCertificado } from "../../modules/Certificado/UseCases/CriarCertificado";
const certificadoRouter = Router()

certificadoRouter.post(
    "/criar-certificado", 
    (req, res)=>{
        return createCertificado.handle(req,res)
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

export { certificadoRouter };