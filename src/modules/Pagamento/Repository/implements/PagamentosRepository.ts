import { Pagamento } from "@prisma/client";
import { ICreatePagamentoDTO, IPagamentoRepository } from "../IPagamentosRepository";
import prisma from "../../../../PrismConfig/PrismaConfig";

class PagamentoRepository implements IPagamentoRepository {
  async create({ cursoId, status_pagamento, usuarioId, valor }: ICreatePagamentoDTO): Promise<Pagamento> {
    const Pagamento = await prisma.pagamento.create({
      data: { 
        valor: valor,
        status_pagamento,
        usuarioId,
        cursoId,
       }
    });
    return Pagamento;
  }
  async findById(id: number): Promise<Pagamento | Pagamento[] | null>{
    if (!id) {
      const pagamentos = await prisma.pagamento.findMany({
      include:{
        curso:true,
        usuario:true      
      }
      })
      return pagamentos
    }
    const pagamento = await prisma.pagamento.findFirst({
      where:{id},
      include:{
        curso:true,
        usuario:true
      }
    })

    return pagamento
  }
}

export { PagamentoRepository };
