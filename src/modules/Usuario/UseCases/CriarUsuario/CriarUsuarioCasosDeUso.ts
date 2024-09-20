import { ICreateUsuarioUseCaseDTO, IUsuarioRepository } from '../../Repository/IUsuarioRepository';
import { hash } from "bcrypt";
import { AppError } from '../../../../Error/AppError';
import { generateToken } from '../../../../services/payload';

interface ICreateUsuarioResponse {
    token: string;
    nome: string;
    email: string;
    telefone?: string;   
}
  
class   CreateUsuarioUseCase {
    constructor (private usuarioRepository : IUsuarioRepository){}

    async execute ({
       nome,
       email,
       senha,
       telefone
    }:ICreateUsuarioUseCaseDTO) : Promise<ICreateUsuarioResponse> {
        const isUsuarioEmailExiste = await this.usuarioRepository.findByEmail(email)
        if (isUsuarioEmailExiste) {
            throw new AppError('Email já foi cadastrado', 400)
        }

        const   senhaHash = await hash(senha, 8)
        const usuario = await this.usuarioRepository.create({
            nome,
            email,
            senha_hash:senhaHash,
            telefone
        })

        const token = generateToken(usuario.id)

        return {
            token,
            nome:usuario.nome,
            email:usuario.email,
            telefone:usuario.telefone ? usuario.telefone : undefined,
        }
    }
}
export {CreateUsuarioUseCase}