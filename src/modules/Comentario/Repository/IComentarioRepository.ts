import {  Comentario } from "@prisma/client";

interface ICreateComentarioDTO {
  usuarioId: number;
  cursoId: number;
  texto: string;
  status: string;
} 
  
  interface IComentarioRepository {
    create({usuarioId, cursoId, texto, status}: ICreateComentarioDTO): Promise<Comentario>;
  }
    
  export {
    ICreateComentarioDTO,
    IComentarioRepository
  }