import { Certificado } from "@prisma/client";
import { ICreateCertificadoDTO, ICertificadoRepository } from "../ICertificadoRepository";
import prisma from "../../../../PrismConfig/PrismaConfig";

class CertificadoRepository implements ICertificadoRepository {
  async create({ certificado_url, cursoId,usuarioId }: ICreateCertificadoDTO): Promise<Certificado> {
    const certificado = await prisma.certificado.create({
      data: { 
        certificado_url,
        cursoId,
        usuarioId,
        data_conclusao: new Date(),
       }
    });
    return certificado;
  }
}

export { CertificadoRepository };
