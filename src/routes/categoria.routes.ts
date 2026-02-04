import { FastifyInstance } from 'fastify'
import { categoriaController } from '../controllers/categoria.controller'

export default function categoriaRoute(server: FastifyInstance) {
  server.register(categoriaController, { prefix: '/api' })
}
