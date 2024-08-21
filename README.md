# REST API em NodeJS
Este projeto foi desenvolvido com o intuito de servir como base para uma aplicação em NodeJS.
Foram utilizadas bibliotecas amplamente conhecidas como Express e Sequelize.

## Primeiros Passos
Para rodar o projeto, basta clonar o repositório e executar o comando `npm install` para instalar todas as dependências.

## Rotas

### Listar Usuários
Retorna uma lista de usuários.
Método: GET
Endpont: localhost:3000/api/v1/users

### Buscar Usuário Pelo ID
Retorna um usuário pelo ID.
Método: GET
Endpont: localhost:3000/api/v1/users/:id

### Criar Usuário
Cria um usuário.
Método: POST
Endpont: localhost:3000/api/v1/users
Body:
```json
{
    "name": "Nome do Usuário",
    "email": "email@email.com",
    "password": "senha"
}
```


### Atualizar Usuário
Atualiza um usuário.
Método: PUT
Endpont: localhost:3000/api/v1/users/:id
Body:
```json
{
    "name": "Novo Nome do Usuário"
}
```

### Deletar Usuário
Deleta um usuário.
Método: DELETE
Endpont: localhost:3000/api/v1/users/:id