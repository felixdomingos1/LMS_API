import { Categoria, Certificado, Curso } from "@prisma/client";

 
  
  interface ICreateCategoriaDTO {
    nome: string;
  }
   
  
  interface ICategoriaRepository {
    create(data: ICreateCategoriaDTO): Promise<Categoria>;
  }
   
  export {
    ICreateCategoriaDTO,
    ICategoriaRepository,
  }