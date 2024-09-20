import * as Yup from "yup";

const usuarioEsquema = Yup.object().shape({
  // image: Yup.object({
  //   fieldname: Yup.string().required(),
  //   originalname: Yup.string().required(),
  //   encoding: Yup.string().required(),
  //   mimetype: Yup.string().required(),
  //   destination: Yup.string().required(),
  //   filename: Yup.string().required(),
  //   path: Yup.string().required(),
  //   size: Yup.number().required(),
  // }).required(),
  nome: Yup.string().max(100, 'O Nome não pode ter mais de 100 caracteres').required('Nome é Obrigatório'),
  email: Yup.string().max(100, 'O Email não pode ter mais de 100 caracteres').email('E-mail inválido').required('Email é Obrigatório'),
  senha: Yup.string().min(8, 'A Palavra Passe não pode ter menos de 8 caracteres').required('A palavra Passe é Obrigatória'),
  telefone: Yup.string().max(9, 'O Telefone não pode ter mais de 9 digitos').required('O Número de Telefone é Obrigatório'),
});

export default usuarioEsquema;