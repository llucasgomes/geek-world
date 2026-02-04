import { z } from 'zod/v4'

export const CategoriaSchema = z.object({
  nome: z.string().min(3, 'Nome deve ter no mínimo 3 caracteres'),
  descricao: z.string().optional(),
})

export const CategoriaUpdateSchema = z.object({
  nome: z.string().min(3).optional(),
  descricao: z.string().optional(),
})

export const CategoriaParamsSchema = z.object({
  id: z.uuid('ID inválido'),
})

export const CategoriaResponseSchema = z.object({
  id: z.uuid(),
  nome: z.string(),
  descricao: z.string().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
})
