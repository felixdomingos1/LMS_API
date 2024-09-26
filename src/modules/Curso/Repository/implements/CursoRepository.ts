import { Curso } from "@prisma/client";
import { ICreateCursoDTO, ICursoRepository } from "../ICursoRepository";
import prisma from "../../../../PrismConfig/PrismaConfig";

class CursoRepository implements ICursoRepository {
  async create({ titulo, descricao, preco, conteudo, imagem_capa, categoria }: ICreateCursoDTO): Promise<Curso> {
    let categoriaData = await prisma.categoria.findFirst({
      where: { nome: categoria },
    });

    if (!categoriaData) {
      categoriaData = await prisma.categoria.create({
        data: { nome: categoria },
      });
    }

    const curso = await prisma.curso.create({
      data: {
        titulo,
        descricao,
        preco,
        conteudo,
        imagem_capa,
        categoriaId: categoriaData.id, // Conectar o curso à categoria existente ou recém-criada
      },
    });

    return curso;
  }

  async findById(id: number): Promise<Curso | null> {
    const curso = await prisma.curso.findUnique({
      where: { id },
      include: {
        categoria: true,
        comentarios: true,
        progresso: true,
      },
    });
    return curso;
  }
}

export { CursoRepository };