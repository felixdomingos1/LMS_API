import { Request, Response } from "express";
import { CreateCertificadoUseCase } from "./CreateCertificadoUseCase";
import { CertificadoService } from "../CertificadoService/CertificadoService";

class CreateCertificadoController {
  constructor(
    private createCertificadoUseCase: CreateCertificadoUseCase,
    private certificadoService: CertificadoService

  ) {}

  async handle(req: Request, res: Response): Promise<Response> {

    const { cursoId,usuarioId, usuarioNome, cursoNome, certificado_url} = req.body;

    const certificado = await this.createCertificadoUseCase.execute({ cursoId, usuarioId, usuarioNome, cursoNome,certificado_url});

    return res.status(201).json(certificado);
  }
}

export { CreateCertificadoController };
