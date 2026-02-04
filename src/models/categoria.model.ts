import { prisma } from '../lib/prisma-client'

export const createCategoriaModel = (data: {
  nome: string
  descricao?: string
}) => {
  return prisma.categoria.create({ data })
}

export const getAllCategoriasModel = () => {
  return prisma.categoria.findMany({
    orderBy: { dataCriacao: 'desc' },
  })
}

export const getCategoriaByIdModel = (id: string) => {
  return prisma.categoria.findUnique({ where: { id } })
}

export const getCategoriaByNomeModel = (nome: string) => {
  return prisma.categoria.findUnique({ where: { nome } })
}

export const updateCategoriaModel = (
  id: string,
  data: { nome?: string; descricao?: string },
) => {
  return prisma.categoria.update({
    where: { id },
    data,
  })
}

export const deleteCategoriaModel = (id: string) => {
  return prisma.categoria.delete({ where: { id } })
}
