import { Categoria } from "@prisma/client";
import { ICreateCategoriaDTO, ICategoriaRepository } from "../ICategoriaRepository";
import prisma from "../../../../PrismConfig/PrismaConfig";

class CategoriaRepository implements ICategoriaRepository {
  async create({ nome }: ICreateCategoriaDTO): Promise<Categoria> {
    const categoria = await prisma.categoria.create({
      data: { nome }
    });
    return categoria;
  }
}

export { CategoriaRepository };
