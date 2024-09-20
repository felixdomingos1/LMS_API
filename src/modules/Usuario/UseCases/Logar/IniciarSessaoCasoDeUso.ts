import { IUsuarioRepository } from "../../Repository/IUsuarioRepository";
import { AppError } from "../../../../Error/AppError";
import { compare } from "bcrypt";
import { generateToken } from "../../../../services/payload";

interface Login {
    token:string,
    email: string;
    nome:string,
    telefone:string | undefined
}

class CreateSessionUseCase{
    constructor(private usuarioRepository: IUsuarioRepository){}

    async execute(email:string, senha:string) : Promise<Login>{

        const usuario = await this.usuarioRepository.findByEmail(email)

        if(!usuario) throw new AppError("Email ou Palavra Passe Inválidas", 401)
        
        const passwordValid = await compare(senha, usuario.senha_hash)

        if(!passwordValid) throw new AppError("Email ou Palavra Passe Inválidas", 401)
        
        const token = generateToken(usuario.id)

        return {
            token,
            nome:usuario.nome,
            email:usuario.email,
            telefone:usuario.telefone ? usuario.telefone : undefined,
        }
    }
}

export {CreateSessionUseCase}