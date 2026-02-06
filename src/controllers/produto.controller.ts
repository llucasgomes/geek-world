import { FastifyInstance } from 'fastify'
import { z } from 'zod'

import {
  createProdutoService,
  deleteProdutoService,
  getAllProdutosService,
  getProdutoByIdService,
  updateProdutoService,
} from '../services/produto.service'

import {
  ProdutoParamsSchema,
  ProdutoSchema,
  ProdutoUpdateSchema,
} from '../schemas/produto.schema'

export async function produtoController(server: FastifyInstance) {
  server.post(
    '/produtos',
    {
      schema: {
        description: 'Cria um novo produto',
        tags: ['Produto'],
        body: ProdutoSchema,
        response: {
          // 201: ProdutoResponseSchema.describe('Produto criado com sucesso'),
          400: z.object({ message: z.string() }).describe('Dados inválidos'),
          404: z
            .object({ message: z.string() })
            .describe('Categoria não encontrada'),
          500: z
            .object({ message: z.string() })
            .describe('Erro interno do servidor'),
        },
      },
    },
    createProdutoService,
  )

  server.get(
    '/produtos',
    {
      schema: {
        description: 'Lista todos os produtos',
        tags: ['Produto'],
        response: {
          200: z.array(z.any()).describe('Lista de produtos'),
        },
      },
    },
    getAllProdutosService,
  )

  server.get(
    '/produtos/:id',
    {
      schema: {
        description: 'Busca um produto pelo ID',
        tags: ['Produto'],
        params: ProdutoParamsSchema,
        response: {
          200: z.any().describe('Produto encontrado'),
          404: z.object({ message: z.string() }),
        },
      },
    },
    getProdutoByIdService,
  )

  server.put(
    '/produtos/:id',
    {
      schema: {
        description: 'Atualiza um produto',
        tags: ['Produto'],
        params: ProdutoParamsSchema,
        body: ProdutoUpdateSchema,
        response: {
          200: z.any().describe('Produto atualizado com sucesso'),
          400: z.object({ message: z.string() }),
          404: z.object({ message: z.string() }),
        },
      },
    },
    updateProdutoService,
  )

  server.delete(
    '/produtos/:id',
    {
      schema: {
        description: 'Remove um produto',
        tags: ['Produto'],
        params: ProdutoParamsSchema,
        response: {
          204: z.null(),
          404: z.object({ message: z.string() }),
        },
      },
    },
    deleteProdutoService,
  )
}
