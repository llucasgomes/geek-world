import { FastifyReply, FastifyRequest } from 'fastify'
import {
  createProdutoModel,
  deleteProdutoModel,
  getAllProdutosModel,
  getProdutoByIdModel,
  updateProdutoModel,
} from '../models/produto.model'

export const createProdutoService = async (
  req: FastifyRequest,
  reply: FastifyReply,
) => {
  const produto = await createProdutoModel(req.body)
  return reply.status(201).send(produto)
}

export const getAllProdutosService = async (
  _req: FastifyRequest,
  reply: FastifyReply,
) => {
  const produtos = await getAllProdutosModel()
  return reply.send(produtos)
}

export const getProdutoByIdService = async (
  req: FastifyRequest,
  reply: FastifyReply,
) => {
  const { id } = req.params as { id: string }

  const produto = await getProdutoByIdModel(id)
  if (!produto) {
    return reply.status(404).send({ message: 'Produto não encontrado' })
  }

  return reply.send(produto)
}

export const updateProdutoService = async (
  req: FastifyRequest,
  reply: FastifyReply,
) => {
  const { id } = req.params as { id: string }
  const produto = await updateProdutoModel(id, req.body)
  return reply.send(produto)
}

export const deleteProdutoService = async (
  req: FastifyRequest,
  reply: FastifyReply,
) => {
  const { id } = req.params as { id: string }
  await deleteProdutoModel(id)
  return reply.status(204).send()
}
