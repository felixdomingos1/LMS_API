import { Router } from "express";
import { createPagamento } from "../../modules/Pagamento/UseCases/CriarPagamento";

const pagamentoRouter = Router()

pagamentoRouter.post(
    "/criar-pagamentos", 
    (req, res)=>{
        return createPagamento.handle(req,res)
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

export { pagamentoRouter };