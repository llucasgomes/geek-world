import { FastifyInstance } from 'fastify'
import { z } from 'zod'

import {
  createCategoriaService,
  deleteCategoriaService,
  getAllCategoriasService,
  getCategoriaByIdService,
  updateCategoriaService,
} from '../services/categoria.service'

import {
  CategoriaParamsSchema,
  CategoriaResponseSchema,
  CategoriaSchema,
  CategoriaUpdateSchema,
} from '../schemas/categoria.schema'

export async function categoriaController(server: FastifyInstance) {
  server.post(
    '/categorias',
    {
      schema: {
        description: 'Cria uma nova categoria',
        tags: ['Categoria'],
        body: CategoriaSchema,
        response: {
          201: CategoriaResponseSchema.describe('Categoria criada com sucesso'),
          409: z
            .object({ message: z.string() })
            .describe('Já existe uma categoria com esse nome'),
          400: z.object({ message: z.string() }).describe('Dados inválidos'),
          500: z
            .object({ message: z.string() })
            .describe('Erro interno do servidor'),
        },
      },
    },
    createCategoriaService,
  )

  server.get(
    '/categorias',
    {
      schema: {
        description: 'Lista todas as categorias',
        tags: ['Categoria'],
        response: {
          200: z.array(CategoriaResponseSchema).describe('Lista de categorias'),
        },
      },
    },
    getAllCategoriasService,
  )

  server.get(
    '/categorias/:id',
    {
      schema: {
        description: 'Busca categoria por ID',
        tags: ['Categoria'],
        params: CategoriaParamsSchema,
        response: {
          200: CategoriaResponseSchema.describe('Categoria encontrada'),
          404: z
            .object({ message: z.string() })
            .describe('Categoria não encontrada'),
        },
      },
    },
    getCategoriaByIdService,
  )

  server.put(
    '/categorias/:id',
    {
      schema: {
        description: 'Atualiza uma categoria',
        tags: ['Categoria'],
        params: CategoriaParamsSchema,
        body: CategoriaUpdateSchema,
        response: {
          200: CategoriaResponseSchema.describe(
            'Categoria atualizada com sucesso',
          ),
          400: z.object({ message: z.string() }).describe('Dados inválidos'),
          404: z
            .object({ message: z.string() })
            .describe('Categoria não encontrada'),
        },
      },
    },
    updateCategoriaService,
  )

  server.delete(
    '/categorias/:id',
    {
      schema: {
        description: 'Remove uma categoria',
        tags: ['Categoria'],
        params: CategoriaParamsSchema,
        response: {
          204: z.null().describe('Categoria removida com sucesso'),
          404: z
            .object({ message: z.string() })
            .describe('Categoria não encontrada'),
        },
      },
    },
    deleteCategoriaService,
  )
}
