Aqui está o conteúdo sugerido para o README, baseado na imagem e no código que você forneceu:

---

# LMS Project - Backend

## Descrição
Este projeto é o backend para um sistema LMS (Learning Management System). Ele foi desenvolvido usando **Node.js**, **Express**, **Prisma** e **TypeScript**, com funcionalidades para gestão de usuários e autenticação.

## Estrutura de Pastas

```
machadoapi/
│
├── prisma/                   # Configurações do Prisma e migrações de banco de dados
├── src/
│   ├── config/               # Configurações gerais da aplicação (ex: Autenticação)
│   ├── Error/                # Manipulação de erros personalizados
│   ├── middlewares/          # Middlewares para a aplicação
│   │   └── authUser.ts       # Middleware de autenticação do usuário
│   ├── modules/              # Módulos principais
│   │   └── Usuario/          # Módulo de Usuário (casos de uso, repositórios)
│   │       ├── Repository/   # Repositórios de Usuário
│   │       ├── UseCases/     # Casos de uso para criação, atualização, exclusão, etc.
│   │       └── schemas/      # Validação com Yup
│   ├── routes/               # Definição de rotas da API
│   ├── services/             # Serviços de payload e validação
│   ├── app.ts                # Configuração do aplicativo Express
│   └── server.ts             # Ponto de entrada do servidor
│
├── .env                      # Variáveis de ambiente
├── tsconfig.json              # Configurações do TypeScript
├── package.json               # Dependências e scripts do projeto
└── README.md                  # Documentação do projeto
```

## Endpoints

Abaixo estão os principais endpoints da API para a rota `http://localhost:3333/api/usuario`.

### 1. Registrar um Usuário
- **Rota**: `/registar`
- **Método**: `POST`
- **Descrição**: Cria um novo usuário no sistema.
- **Payload**:
  ```json
  {
    "nome": "string",
    "email": "string",
    "senha": "string"
  }
  ```
- **Retorno**: Dados do usuário criado.

### 2. Login de Usuário
- **Rota**: `/login`
- **Método**: `POST`
- **Descrição**: Faz login no sistema e retorna um token JWT.
- **Payload**:
  ```json
  {
    "email": "string",
    "senha": "string"
  }
  ```
- **Retorno**: Token JWT para autenticação.

### 3. Pegar um Usuário pelo ID
- **Rota**: `/pegar/:id`
- **Método**: `GET`
- **Descrição**: Retorna os dados de um usuário específico pelo ID.
- **Parâmetros**: `id` - ID do usuário.

### 4. Atualizar um Usuário
- **Rota**: `/atualizar/:id`
- **Método**: `PUT`
- **Descrição**: Atualiza os dados de um usuário.
- **Parâmetros**: `id` - ID do usuário.
- **Payload**:
  ```json
  {
    "nome": "string",
    "email": "string"
  }
  ```
- **Retorno**: Dados atualizados do usuário.

### 5. Excluir um Usuário
- **Rota**: `/apagar/:id`
- **Método**: `DELETE`
- **Descrição**: Exclui um usuário do sistema.
- **Parâmetros**: `id` - ID do usuário.

## Scripts

No arquivo `package.json`, estão disponíveis os seguintes scripts:

- **`dev`**: Inicia o servidor em ambiente de desenvolvimento com **nodemon** e **ts-node**.
  ```bash
  npm run dev
  ```
- **`build`**: Compila o código TypeScript para JavaScript.
  ```bash
  npm run build
  ```
- **`start`**: Inicia o servidor com o código compilado.
  ```bash
  npm start
  ```
- **`prisma:migrate`**: Executa as migrações do Prisma.
  ```bash
  npm run prisma:migrate
  ```
- **`prisma:generate`**: Gera os artefatos do Prisma.
  ```bash
  npm run prisma:generate
  ```
- **`prisma:studio`**: Abre o Prisma Studio para visualizar e editar dados.
  ```bash
  npm run prisma:studio
  ```

## Dependências

- **Express**: Framework web para Node.js.
- **Prisma**: ORM para gerenciamento do banco de dados.
- **TypeScript**: Superconjunto tipado de JavaScript.
- **bcrypt**: Para hashing de senhas.
- **jsonwebtoken**: Para geração e verificação de tokens JWT.
- **Multer**: Middleware para upload de arquivos.
- **Yup**: Validação de esquemas de objetos.

## Configuração

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```
DATABASE_URL="sua_url_do_banco"
JWT_SECRET="sua_chave_secreta_para_jwt"
PORT=3333
```

## Como Rodar o Projeto

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Execute as migrações do banco de dados:
   ```bash
   npm run prisma:migrate
   ```

3. Inicie o servidor em ambiente de desenvolvimento:
   ```bash
   npm run dev
   ```

4. O servidor estará disponível em `http://localhost:3333`.

---

Este README cobre as principais funcionalidades e instruções para uso do backend do sistema LMS.
