import { ProgressoCurso } from "@prisma/client";
import { ICreateProgressoCursoDTO, IProgressoCursoRepository } from "../IProgressoCursoRepository";
import prisma from "../../../../PrismConfig/PrismaConfig";

class ProgressoCursoRepository implements IProgressoCursoRepository {
  async create({ cursoId,progresso,usuarioId }: ICreateProgressoCursoDTO): Promise<ProgressoCurso> {
    const progressoCurso = await prisma.progressoCurso.create({
      data: { 
        progresso,
        cursoId,
        usuarioId
       }
    });
    return progressoCurso;
  }
}

export { ProgressoCursoRepository };
