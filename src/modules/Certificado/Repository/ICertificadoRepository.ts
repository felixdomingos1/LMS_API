import { Certificado } from "@prisma/client";

  interface ICreateCertificadoDTO {
    usuarioId: number;
    cursoId: number;
    certificado_url:string
    usuarioNome:string 
    cursoNome:string
  }
  
  interface ICertificadoRepository {
    create(data: ICreateCertificadoDTO): Promise<Certificado>;
  }
    
  export {
    ICreateCertificadoDTO,
    ICertificadoRepository,
  }