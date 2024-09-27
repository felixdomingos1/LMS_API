import { Comentario } from "@prisma/client";
import { ICreateComentarioDTO, IComentarioRepository } from "../IComentarioRepository";
import prisma from "../../../../PrismConfig/PrismaConfig";

class ComentarioRepository implements IComentarioRepository {
  async create({usuarioId, cursoId, texto, status}: ICreateComentarioDTO): Promise<Comentario> {
    const Comentario = await prisma.comentario.create({
      data:{
        usuarioId, 
        cursoId, 
        texto, 
        status
      }
    });
    return Comentario;
  }
}

export { ComentarioRepository };
