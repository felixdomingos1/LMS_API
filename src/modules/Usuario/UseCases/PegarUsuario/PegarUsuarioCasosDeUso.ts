import { AppError } from "../../../../Error/AppError";
import { UsuarioRepository } from "../../Repository/implements/UsuarioRepository";

class GetUsuarioUseCase {
    constructor (private usuarioRepository: UsuarioRepository){}
    
    async execute(id:number | null){
        const   usuario = await this.usuarioRepository.findById(id)
        
        if (!usuario) {
             throw new AppError('Usuario não encontrado', 404)
        }
        
        return usuario
    }
}

export {GetUsuarioUseCase}