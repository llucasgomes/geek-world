import { prisma } from '../lib/prisma-client'

export const createProdutoModel = (data: any) => {
  return prisma.produto.create({ data })
}

export const getAllProdutosModel = () => {
  return prisma.produto.findMany({
    include: { categoria: true },
    orderBy: { dataCriacao: 'desc' },
  })
}

export const getProdutoByIdModel = (id: string) => {
  return prisma.produto.findUnique({
    where: { id },
    include: { categoria: true },
  })
}

export const updateProdutoModel = (id: string, data: any) => {
  return prisma.produto.update({
    where: { id },
    data,
  })
}

export const deleteProdutoModel = (id: string) => {
  return prisma.produto.delete({ where: { id } })
}
