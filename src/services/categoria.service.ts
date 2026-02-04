import { FastifyReply, FastifyRequest } from 'fastify'
import {
  createCategoriaModel,
  deleteCategoriaModel,
  getAllCategoriasModel,
  getCategoriaByIdModel,
  getCategoriaByNomeModel,
  updateCategoriaModel,
} from '../models/categoria.model'

export const createCategoriaService = async (
  req: FastifyRequest,
  reply: FastifyReply,
) => {
  const { nome, descricao } = req.body as any

  const existe = await getCategoriaByNomeModel(nome)
  if (existe) {
    return reply.status(409).send({ message: 'Categoria já existente' })
  }

  const categoria = await createCategoriaModel({ nome, descricao })
  return reply.status(201).send(categoria)
}

export const getAllCategoriasService = async (
  _req: FastifyRequest,
  reply: FastifyReply,
) => {
  const categorias = await getAllCategoriasModel()
  return reply.send(categorias)
}

export const getCategoriaByIdService = async (
  req: FastifyRequest,
  reply: FastifyReply,
) => {
  const { id } = req.params as { id: string }

  const categoria = await getCategoriaByIdModel(id)
  if (!categoria) {
    return reply.status(404).send({ message: 'Categoria não encontrada' })
  }

  return reply.send(categoria)
}

export const updateCategoriaService = async (
  req: FastifyRequest,
  reply: FastifyReply,
) => {
  const { id } = req.params as { id: string }
  const categoria = await updateCategoriaModel(id, req.body as any)
  return reply.send(categoria)
}

export const deleteCategoriaService = async (
  req: FastifyRequest,
  reply: FastifyReply,
) => {
  const { id } = req.params as { id: string }
  await deleteCategoriaModel(id)
  return reply.status(204).send()
}
