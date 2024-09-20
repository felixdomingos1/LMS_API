/*
  Warnings:

  - You are about to drop the column `atualizadoEm` on the `curso` table. All the data in the column will be lost.
  - You are about to drop the column `criadoEm` on the `curso` table. All the data in the column will be lost.
  - You are about to drop the column `instrutorId` on the `curso` table. All the data in the column will be lost.
  - You are about to drop the column `nome` on the `curso` table. All the data in the column will be lost.
  - You are about to drop the column `atualizadoEm` on the `usuario` table. All the data in the column will be lost.
  - You are about to drop the column `criadoEm` on the `usuario` table. All the data in the column will be lost.
  - You are about to drop the `aula` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `inscricao` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `categoriaId` to the `Curso` table without a default value. This is not possible if the table is not empty.
  - Added the required column `conteudo` to the `Curso` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imagem_capa` to the `Curso` table without a default value. This is not possible if the table is not empty.
  - Added the required column `preco` to the `Curso` table without a default value. This is not possible if the table is not empty.
  - Added the required column `titulo` to the `Curso` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `aula` DROP FOREIGN KEY `Aula_cursoId_fkey`;

-- DropForeignKey
ALTER TABLE `curso` DROP FOREIGN KEY `Curso_instrutorId_fkey`;

-- DropForeignKey
ALTER TABLE `inscricao` DROP FOREIGN KEY `Inscricao_cursoId_fkey`;

-- DropForeignKey
ALTER TABLE `inscricao` DROP FOREIGN KEY `Inscricao_usuarioId_fkey`;

-- AlterTable
ALTER TABLE `curso` DROP COLUMN `atualizadoEm`,
    DROP COLUMN `criadoEm`,
    DROP COLUMN `instrutorId`,
    DROP COLUMN `nome`,
    ADD COLUMN `categoriaId` INTEGER NOT NULL,
    ADD COLUMN `conteudo` JSON NOT NULL,
    ADD COLUMN `data_criacao` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `imagem_capa` VARCHAR(191) NOT NULL,
    ADD COLUMN `preco` DOUBLE NOT NULL,
    ADD COLUMN `titulo` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `usuario` DROP COLUMN `atualizadoEm`,
    DROP COLUMN `criadoEm`,
    ADD COLUMN `data_cadastro` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `telefone` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `aula`;

-- DropTable
DROP TABLE `inscricao`;

-- CreateTable
CREATE TABLE `Categoria` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pagamento` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `usuarioId` INTEGER NOT NULL,
    `cursoId` INTEGER NOT NULL,
    `valor` DOUBLE NOT NULL,
    `status_pagamento` VARCHAR(191) NOT NULL,
    `data_pagamento` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProgressoCurso` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `usuarioId` INTEGER NOT NULL,
    `cursoId` INTEGER NOT NULL,
    `progresso` DOUBLE NOT NULL,
    `data_atualizacao` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Certificado` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `usuarioId` INTEGER NOT NULL,
    `cursoId` INTEGER NOT NULL,
    `data_conclusao` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `certificado_url` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Comentario` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `usuarioId` INTEGER NOT NULL,
    `cursoId` INTEGER NOT NULL,
    `texto` VARCHAR(191) NOT NULL,
    `data_comentario` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `status` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_CursoToUsuario` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_CursoToUsuario_AB_unique`(`A`, `B`),
    INDEX `_CursoToUsuario_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Curso` ADD CONSTRAINT `Curso_categoriaId_fkey` FOREIGN KEY (`categoriaId`) REFERENCES `Categoria`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Pagamento` ADD CONSTRAINT `Pagamento_usuarioId_fkey` FOREIGN KEY (`usuarioId`) REFERENCES `Usuario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Pagamento` ADD CONSTRAINT `Pagamento_cursoId_fkey` FOREIGN KEY (`cursoId`) REFERENCES `Curso`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProgressoCurso` ADD CONSTRAINT `ProgressoCurso_usuarioId_fkey` FOREIGN KEY (`usuarioId`) REFERENCES `Usuario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProgressoCurso` ADD CONSTRAINT `ProgressoCurso_cursoId_fkey` FOREIGN KEY (`cursoId`) REFERENCES `Curso`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Certificado` ADD CONSTRAINT `Certificado_usuarioId_fkey` FOREIGN KEY (`usuarioId`) REFERENCES `Usuario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Certificado` ADD CONSTRAINT `Certificado_cursoId_fkey` FOREIGN KEY (`cursoId`) REFERENCES `Curso`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Comentario` ADD CONSTRAINT `Comentario_usuarioId_fkey` FOREIGN KEY (`usuarioId`) REFERENCES `Usuario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Comentario` ADD CONSTRAINT `Comentario_cursoId_fkey` FOREIGN KEY (`cursoId`) REFERENCES `Curso`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CursoToUsuario` ADD CONSTRAINT `_CursoToUsuario_A_fkey` FOREIGN KEY (`A`) REFERENCES `Curso`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CursoToUsuario` ADD CONSTRAINT `_CursoToUsuario_B_fkey` FOREIGN KEY (`B`) REFERENCES `Usuario`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
