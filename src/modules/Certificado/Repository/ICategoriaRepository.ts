import { Categoria, Certificado, Curso } from "@prisma/client";

interface ICreateCursoDTO {
    titulo: string;
    descricao: string;
    preco: number;
    conteudo: any;  // JSON para vídeos, PDFs, quizzes, etc.
    imagem_capa: string;
    categoria:string
  }
  
  interface ICreateCategoriaDTO {
    nome: string;
  }
  
  interface ICreateCertificadoDTO {
    usuarioId: number;
    cursoId: number;
    certificado_url: string;
  }
  interface ICursoRepository {
    create(data: ICreateCursoDTO): Promise<Curso>;
    findById(id: number): Promise<Curso | null>;
  }
  
  interface ICategoriaRepository {
    create(data: ICreateCategoriaDTO): Promise<Categoria>;
  }
  
  interface ICertificadoRepository {
    create(data: ICreateCertificadoDTO): Promise<Certificado>;
  }
    
  export {
    ICreateCertificadoDTO,
    ICreateCursoDTO,
    ICreateCategoriaDTO,
    ICursoRepository,
    ICategoriaRepository,
    ICertificadoRepository,
  }