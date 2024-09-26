import { Usuario } from "@prisma/client";
import { ICreateUsuarioDTO, IUpdateUsuarioDTO, IUsuarioRepository } from "../IUsuarioRepository";
import prisma from "../../../../PrismConfig/PrismaConfig";

class UsuarioRepository implements IUsuarioRepository {
    async create({ nome, email, senha_hash, telefone }: ICreateUsuarioDTO): Promise<Usuario> {
        const usuario = await prisma.usuario.create({
            data: { nome, email, senha_hash, telefone }
        });
        return usuario;
    }
    
    async findByEmail(email: string): Promise<Usuario | null> {
        const usuario = await prisma.usuario.findUnique({
            where: { email },
            include: {
                pagamentos: true,
                cursos: true,
                progresso: true,
                certificados: true,
                comentarios: true
            }
        });
        if (!usuario) {
            return null;
        }
        return usuario;
    }

    async findById(id: number | null): Promise<Usuario | Usuario[] | null> {
        if (!id) {
            return await prisma.usuario.findMany({
                include: {
                    pagamentos: true,
                    cursos: true,
                    progresso: true,
                    certificados: true,
                    comentarios: true,
                    _count:true
                }
            });
        }
        const usuario = await prisma.usuario.findFirst({
            where: { id },
            include: {
                pagamentos: true,
                cursos: true,
                progresso: true,
                certificados: true,
                comentarios: true
            }
        });
        if (!usuario) {
            return null;
        }
        return usuario;
    }

    async update({ id, nome, email, senha_hash, telefone }: IUpdateUsuarioDTO): Promise<Usuario> {
        const updatedUsuario = await prisma.usuario.update({
            where: { id },
            data: {
                nome,
                email,
                senha_hash, 
                telefone
            }
        });
        return updatedUsuario;
    }

    async deleteUsuario(id: number): Promise<Usuario> {
        const deletado = await prisma.usuario.delete({
            where: { id },
        });
        return deletado;
    }
}

export { UsuarioRepository };