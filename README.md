# 📦 API de Gerenciamento – Mundo Geek

## 🧩 Cenário de Negócio

A **Mundo Geek** é uma loja especializada em produtos colecionáveis, jogos de tabuleiro e itens de cultura pop.  
Com o crescimento acelerado do negócio, o proprietário **Sr. Osvaldo** identificou que o controle manual de estoque e vendas tornou-se inviável.

Diante disso, foi solicitada a criação de uma **API REST** que permita:

- Organização dos produtos por **categorias**
- Gerenciamento eficiente do **estoque**
- Facilidade de uso
- Possibilidade de **expansão futura**

---

## 🎯 Objetivo da API

Desenvolver uma API robusta, confiável e escalável que possibilite o gerenciamento completo de:

- **Categorias de Produtos**
- **Produtos**

A API foi construída seguindo boas práticas de desenvolvimento, com validações de dados e documentação integrada.

---

## 🛠️ Tecnologias Utilizadas

- **Node.js**
- **Fastify** – Framework web performático
- **TypeScript**
- **Zod** – Validação e tipagem de dados
- **Prisma ORM** – Mapeamento objeto-relacional
- **SQLite** – Banco de dados
- **Swagger + Scalar** – Documentação interativa da API

---

## 📥 Clonando o Repositório

```bash
git clone https://github.com/seu-usuario/mundo-geek-api.git
cd mundo-geek-api
```

---

## 📦 Instalando as Dependências

```bash
npm install
# ou
yarn install
# ou
pnpm install

```

---

## ⚙️ Configuração do Banco de Dados

A API utiliza SQLite como banco de dados, gerenciado através do Prisma ORM.

1. Gere o cliente do Prisma:

```bash
npx prisma generate

```

2. Execute as migrations:

```bash
npx prisma migrate dev

```

---

## 🗄️ Banco de Dados e ORM

Para o gerenciamento e persistência dos dados, foi utilizado:

- **SQLite** como banco de dados, escolhido por sua leveza e facilidade de configuração
- **Prisma ORM**, responsável por:
  - Modelagem das entidades
  - Criação e versionamento do banco via migrations
  - Abstração das consultas SQL
  - Maior segurança e produtividade no acesso aos dados

O Prisma garante uma integração simples, tipada e confiável entre a API e o banco de dados.

---

## 📄 Documentação da API (Swagger + Scalar)

Foi adicionado o **Swagger** integrado com o **Scalar**, permitindo:

- Visualização clara de todos os endpoints
- Testes diretos da API via navegador
- Consulta dos schemas de requisição e resposta
- Melhor experiência para desenvolvedores

Após iniciar o servidor, a documentação pode ser acessada pelo navegador, facilitando o consumo da API sem a necessidade de ferramentas externas.

| Rota                         | Descrição           |
| ---------------------------- | ------------------- |
| `http://localhost:3000/docs` | documentação Scalar |

---

## 🗂️ Estrutura da API

A API foi organizada de forma modular, seguindo boas práticas de arquitetura:

- **Models**  
  Responsavel por representar e gerenciar os dados da aplicação.Eles definem a estrutura dos dados e as interações com o banco de dados.

- **Services**  
  Responsavel em conter a logica de negocio.Eles sao responsaveis por processar os dados e aplicar as regras de negocio antes de interagir com os models.

- **Controllers**  
   esponsaveis por lidar com as requisições HTTP e chamar os erviços apropriados.Eles atuam como intermediarios entre as rotas e os serviços

- **Routes**  
   Definem os endpointes da API e mapeiam as requisições HTTP para os controladores correspondentes

- **Schemas**  
  Validação de `body`, `params` e `responses`

- **Prisma**  
  Definição dos models, migrations e client

---

## 📌 Funcionalidades Implementadas

### 🔖 Categorias

CRUD completo para gerenciamento de categorias de produtos.

**Endpoints disponíveis:**

| Método | Rota              | Descrição                 |
| ------ | ----------------- | ------------------------- |
| POST   | `/categorias`     | Cria uma nova categoria   |
| GET    | `/categorias`     | Lista todas as categorias |
| GET    | `/categorias/:id` | Busca categoria por ID    |
| PUT    | `/categorias/:id` | Atualiza uma categoria    |
| DELETE | `/categorias/:id` | Remove uma categoria      |

✔ Validações com Zod  
✔ Persistência com Prisma ORM

---

### 🛍️ Produtos

CRUD completo para gerenciamento dos produtos da loja.

**Endpoints disponíveis:**

| Método | Rota            | Descrição                |
| ------ | --------------- | ------------------------ |
| POST   | `/produtos`     | Cadastra um novo produto |
| GET    | `/produtos`     | Lista todos os produtos  |
| GET    | `/produtos/:id` | Busca produto por ID     |
| PUT    | `/produtos/:id` | Atualiza um produto      |
| DELETE | `/produtos/:id` | Remove um produto        |

**Validações aplicadas:**

- Nome do produto
- Preço
- Quantidade em estoque
- Associação com categoria existente

---

## ✅ Boas Práticas Aplicadas

- Uso de **Prisma ORM** para acesso ao banco
- Validação de dados com **Zod**
- Separação clara de responsabilidades
- Tratamento de erros padronizado
- Documentação automática com **Swagger + Scalar**
- Código tipado com **TypeScript**

---

## 🚀 Considerações Finais

A API desenvolvida fornece uma base sólida para o gerenciamento da **Mundo Geek**, unindo simplicidade, organização e escalabilidade.

A combinação de **Fastify + Prisma + SQLite + Zod** garante:

- Performance
- Segurança
- Facilidade de manutenção
- Pronta para evoluções futuras

📌 _Projeto desenvolvido com foco em qualidade, boas práticas e crescimento sustentável._
