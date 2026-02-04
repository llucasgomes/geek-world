import { z } from 'zod/v4'

export const ProdutoSchema = z.object({
  nome: z.string().min(3, 'Nome deve ter no mínimo 3 caracteres'),
  descricao: z.string().optional(),
  preco: z.number().positive('Preço deve ser maior que zero'),
  estoque: z.number().int().min(0, 'Estoque não pode ser negativo'),
  categoriaId: z.uuid('Categoria inválida'),
})

export const ProdutoUpdateSchema = z.object({
  nome: z.string().min(3).optional(),
  descricao: z.string().optional(),
  preco: z.number().positive().optional(),
  estoque: z.number().int().min(0).optional(),
  categoriaId: z.uuid().optional(),
})

export const ProdutoParamsSchema = z.object({
  id: z.uuid('ID inválido'),
})

export const ProdutoResponseSchema = z.object({
  id: z.uuid(),
  nome: z.string(),
  descricao: z.string().nullable(),
  preco: z.number(),
  estoque: z.number(),
  categoriaId: z.uuid(),
  createdAt: z.date(),
  updatedAt: z.date(),
})
