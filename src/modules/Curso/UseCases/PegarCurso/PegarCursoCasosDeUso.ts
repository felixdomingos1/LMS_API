import { AppError } from "../../../../Error/AppError";
import { CursoRepository } from "../../Repository/implements/CursoRepository";

class GetCursoUseCase {
    constructor (private cursoRepository: CursoRepository){}
    
    async execute(id:number | null){
        const   usuario = await this.cursoRepository.findById(id)
        
        if (!usuario) {
             throw new AppError('Curso não encontrado', 404)
        }
        
        return usuario
    }
}

export {GetCursoUseCase}