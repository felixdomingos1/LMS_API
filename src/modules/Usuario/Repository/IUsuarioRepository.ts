import { Usuario } from "@prisma/client";  

interface ICreateUsuarioDTO {
  nome: string;
  email: string;
  senha_hash: string;
  telefone?: string;   
}

interface ICreateUsuarioUseCaseDTO {
  nome: string;
  email: string;
  senha: string;
  telefone?: string;  
}

interface IUpdateUsuarioDTO {
  id: number;
  nome: string;
  email: string;
  senha_hash?: string;      
  telefone?: string;   
}

interface IUpdateUsuarioUseCaseDTO {
  nome: string;
  email: string;
  senha?: string;    
  telefone?: string;
}

interface IUsuarioRepository {
  create({
    nome,
    email,
    senha_hash,
    telefone,
  }: ICreateUsuarioDTO): Promise<Usuario>;

  findByEmail(email: string): Promise<Usuario | null>;

  findById(id: number | null): Promise<Usuario | Usuario[] | null>;

  update({
    id,
    nome,
    email,
    senha_hash,
    telefone,
  }: IUpdateUsuarioDTO): Promise<Usuario>;

  deleteUsuario(id: number): Promise<Usuario>;
}

export {
  IUsuarioRepository,
  ICreateUsuarioDTO,
  ICreateUsuarioUseCaseDTO,
  IUpdateUsuarioUseCaseDTO,
  IUpdateUsuarioDTO
};
