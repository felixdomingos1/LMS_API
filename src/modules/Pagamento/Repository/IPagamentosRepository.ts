import { Categoria, Certificado, Pagamento } from "@prisma/client";

interface ICreatePagamentoDTO {
  usuarioId: number;
  cursoId: number;
  valor: number;
  status_pagamento: string;
} 
  interface IPagamentoRepository {
    create(data: ICreatePagamentoDTO): Promise<Pagamento>;
    findById(id: number): Promise<Pagamento | Pagamento[] | null>;
  }
  export {
    ICreatePagamentoDTO,
    IPagamentoRepository,
  }