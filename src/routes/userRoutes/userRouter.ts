import { Router } from "express";
import { criarUsuario } from "../../modules/Usuario/UseCases/CriarUsuario"; 
import { authUser } from "../../middlewares/authUser";
import { pegarUsuario } from "../../modules/Usuario/UseCases/PegarUsuario";
import { session } from "../../modules/Usuario/UseCases/Logar";
import { eliminarUsuario } from "../../modules/Usuario/UseCases/EliminarUsuario";
import { atualizarUsuario } from "../../modules/Usuario/UseCases/AtualizarUsuario";

const usuarioRouter = Router()

usuarioRouter.post(
    "/registar", 
    (req, res)=>{
        return criarUsuario.handle(req,res)
    }
)

usuarioRouter.post(
    "/login", 
    (req, res)=>{
        return session.handle(req,res)
    }
)

usuarioRouter.get(
    "/pegar/:id", 
    (req, res)=>{
        return pegarUsuario.handle(req,res)
    }
)

usuarioRouter.put(
    "/atualizar/:id", 
    (req, res)=>{
        return atualizarUsuario.handle(req,res)
    }
)

usuarioRouter.delete(
    "/apagar/:id", 
    (req, res)=>{
        return eliminarUsuario.handle(req,res)
    }
)

export { usuarioRouter };