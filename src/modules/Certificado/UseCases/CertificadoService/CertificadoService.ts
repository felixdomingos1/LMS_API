import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import pdfkit from "pdfkit";
import fs from "fs";
import path from "path";
import { promisify } from "util";

class CertificadoService {
  private s3Client: S3Client;

  constructor() {
    this.s3Client = new S3Client({
      region: process.env.AWS_REGION,
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
      },
    });
  }

  async generateAndUploadCertificado(data: any): Promise<string> {
    const doc = new pdfkit();
    const filePath = path.resolve(__dirname, "certificado.pdf");
    const writeStream = fs.createWriteStream(filePath);

    doc.pipe(writeStream);
    doc.text(`Certificado para ${data.usuarioNome}`);
    doc.text(`Curso: ${data.cursoNome}`);
    doc.end();

    await promisify(writeStream.on.bind(writeStream))("finish");

    const fileStream = fs.createReadStream(filePath);
    const uploadParams = {
      Bucket: process.env.BUCKET_NAME!,
      Key: `certificados/${data.usuarioNome}-${data.cursoNome}.pdf`,
      Body: fileStream,
      ContentType: "application/pdf",
    };

    const command = new PutObjectCommand(uploadParams);
    const result = await this.s3Client.send(command);

    return `https://${process.env.BUCKET_NAME}.s3.amazonaws.com/${uploadParams.Key}`;
  }
}

export { CertificadoService };
