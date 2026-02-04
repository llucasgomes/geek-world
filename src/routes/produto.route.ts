import { FastifyInstance } from 'fastify'
import { produtoController } from '../controllers/produto.controller'

export default function produtoRoute(server: FastifyInstance) {
  server.register(produtoController, { prefix: '/api' })
}
