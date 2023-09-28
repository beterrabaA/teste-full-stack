
# Desafio Backend

Uma API com CRUD para gerenciar produtos e cadastro de usuarios. Sendo utilizado o banco de dados postgresql através do  Prisma.


## Rodar localmente

Subir todos os containers

```bash
  docker-compose up -d --build
```

## Desenvolvimento

Para iniciar a api

```bash
  cd .\server\
  npm install
  npm run dev
```

Para iniciar o client

```bash
  cd .\client\
  npm install
  npm run dev
```


## API Reference

#### Cadastro usuario

```http
  POST /user/register
```

- O corpo da requisição poderá seguir o formato abaixo:

```json
{
  "username": "Beterraba",
  "email": "email@email.com",
  "password": "senha123",
}
```

#### Login usuario

```http
  POST /user/register
```

- O corpo da requisição poderá seguir o formato abaixo:

```json
{
  "email": "email@email.com",
  "password": "senha123",
}
```

Quando é efetuado o login com sucesso é gerado um token que é preciso para acessar rotas protegida.

### Rota protegida

- Hearder { "Authorization": token }

#### Recuperar todos produtos do usuario logado

```http
  GET /product
```

```json
{
  "id": "productId1",
  "createdById": "userid1",
  "name": "productname1",
  "description": "description1",
  "category": "category1",
  "price": 12.66,
  "createdAt": "createdDate1",
  "updatedAt": "updatedDate1",
},
{
  "id": "productId2",
  "createdById": "userid1",
  "name": "productname2",
  "description": "description2",
  "category": "category2",
  "price": 5.47,
  "createdAt": "createdDate2",
  "updatedAt": "updatedDate2",
}...

````

#### Recuperar produto por id especifico

```http
  GET /product/${id}
```
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do item que você quer |

```json
{
  "id": "id",
  "createdById": "userid1",
  "name": "productname1",
  "description": "description1",
  "category": "category1",
  "price": 12.66,
  "createdAt": "createdDate1",
  "updatedAt": "updatedDate1",
}

```

#### Criar novo produto

```http
  POST /product
```

- O corpo da requisição poderá seguir o formato abaixo:

```json
{
  "name": "produto 1",
  "description": "description 1",
  "category": "category 1",
  "price": 5.47,
}

```

- Rotorno será semelhante

```json
{
  "id": "id gerado",
  "createdById": "userid1",
  "name": "produto 1",
  "description": "description 1",
  "category": "category 1",
  "price": 5.47,
  "createdAt": "createdDate1",
  "updatedAt": "updatedDate1",
}

```

#### Atualizar um produto já criado

```http
  PUT /product/${id}
```
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do item que você quer |

- O corpo da requisição poderá seguir o formato abaixo:

```json
{
  "name": "produto 2",
  "description": "description 2",
  "category": "category 2",
  "price": 4.78,
}

```

#### Deleta um produto

```http
  DELETE /cars/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do item que você quer |


## Variaveis de ambiente

Para rodar corretamente é preciso com essas variaveis no .env

`API_PORT`

`JWT_SECRET`

`DATABASE_URL`

`CRYPTO_SALT`

