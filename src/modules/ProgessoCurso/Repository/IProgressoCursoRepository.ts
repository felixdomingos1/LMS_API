import {  ProgressoCurso } from "@prisma/client";

interface ICreateProgressoCursoDTO {
  usuarioId: number;
  cursoId: number;
  progresso: number;
} 
  
  interface IProgressoCursoRepository {
    create({ cursoId,progresso,usuarioId }: ICreateProgressoCursoDTO): Promise<ProgressoCurso>;
  }
    
  export {
    ICreateProgressoCursoDTO,
    IProgressoCursoRepository,
  }