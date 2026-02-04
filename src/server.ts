import fastifyCors from '@fastify/cors'
import fastify, { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import {
  jsonSchemaTransform,
  serializerCompiler,
  validatorCompiler,
  ZodTypeProvider,
} from 'fastify-type-provider-zod'

import fastifySwagger from '@fastify/swagger'
import ScalarFastifyApiReference from '@scalar/fastify-api-reference'
import categoriaRoute from './routes/categoria.routes'
import produtoRoute from './routes/produto.route'

//Instaciar o servidor
const server: FastifyInstance = fastify().withTypeProvider<ZodTypeProvider>()

//Configurações
server.setSerializerCompiler(serializerCompiler)
server.setValidatorCompiler(validatorCompiler)

//Plugins
server.register(fastifyCors)

server.register(fastifySwagger, {
  openapi: {
    info: {
      title: '"API - Mundo Geek"',
      version: '1.0.0',
      description: `
A **API - Mundo Geek** especializada em produtos colecionáveis, jogos de tabuleiro e itens de cultura pop.


### 📦 Convenções
- Todas as respostas são no formato **JSON**
- Status HTTP seguem os padrões:
  - \`200\` Sucesso
  - \`201\` Criado
  - \`400\` Requisição inválida
  - \`401\` Não autorizado
  - \`404\` Não encontrado
  - \`500\` Erro interno

---
🔧 **Suporte**: entre em contato com a equipe Mundo Geek em caso de dúvidas.
      `,
    },
    // components: {
    //   securitySchemes: {
    //     bearerAuth: {
    //       type: "http",
    //       scheme: "bearer",
    //       bearerFormat: "JWT",
    //     },
    //   },
    // },
    // security: [{ bearerAuth: [] }],
  },
  transform: jsonSchemaTransform,
})

server.register(ScalarFastifyApiReference, {
  routePrefix: '/docs',
  configuration: {
    theme: 'kepler',
  },
})

//rotas
server.get('/', (req: FastifyRequest, replay: FastifyReply) => {
  replay.status(200).send({ message: 'servidor ok' })
})

server.register(produtoRoute)
server.register(categoriaRoute)

//configurações de porta
server.listen(
  {
    port: 3000,
  },
  () => {
    console.log('Server runnig port 3000')
  },
)
