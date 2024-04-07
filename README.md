# API de Gerenciamento de Livros

Este é o README para a API de gerenciamento de livros. Aqui você encontrará informações detalhadas sobre como configurar, usar e desenvolver esta API.

##Introdução

Bem-vindo à API de Gerenciamento de Livros! Esta API foi desenvolvida como parte de um projeto para aplicar os conceitos aprendidos até agora, com foco em Desenvolvimento Orientado a Testes (TDD). Todos os testes necessários já foram escritos e devem ser mantidos sem alterações.

##Tecnologias Utilizadas

Node.js: Plataforma de desenvolvimento para construir a API.
Express: Framework web para Node.js utilizado para lidar com rotas e requisições HTTP.
Jest: Framework de testes utilizado para escrever e executar testes automatizados.
TypeScript: Linguagem de programação que adiciona tipagem estática ao JavaScript.
SQLite: Banco de dados utilizado para armazenar informações sobre os livros.

##Configuração Inicial
Para começar a trabalhar com esta API, siga estas etapas:

Clone o repositório: Use o comando git clone para clonar este repositório para o seu ambiente local.
Instale as dependências: Execute o comando npm install para instalar todas as dependências necessárias.
##Banco de Dados
A API utiliza um banco de dados para armazenar informações sobre os livros. Certifique-se de configurar o banco de dados conforme as instruções fornecidas no arquivo database/database.ts.

##Interface de Dados
A interface de dados para os livros inclui os seguintes campos:

id: Número
name: Texto
pages: Número
category: Texto (opcional)
createdAt: Data
updatedAt: Data
Certifique-se de que os IDs dos livros sejam sequenciais e únicos, começando do ID 1.

##Rotas
A API disponibiliza as seguintes rotas para manipulação dos livros:

POST /books: Criação de um novo livro.
GET /books: Leitura de todos os livros.
GET /books/:id: Leitura de um livro específico.
PATCH /books/:id: Atualização de um livro existente.
DELETE /books/:id: Remoção de um livro do sistema.
##Requisições e Respostas
As requisições e respostas para cada rota devem seguir os formatos especificados. Aqui estão alguns exemplos:

##POST /books
Requisição:
json
```
{
	"name": "Harry Potter",
	"pages": 123,
	"category": "Fantasia" 
}
```
Resposta (Código de status 201):
json
```
{
	"id": 1,
	"name": "Harry Potter",
	"pages": 123,
	"category": "Fantasia",
	"createdAt": "2023-10-06T13:14:21.752Z",
	"updatedAt": "2023-10-06T13:14:21.752Z"
}
```
##GET /books
Resposta (Código de status 200):
json
```
[
	{
		"id": 1,
		"name": "Harry Potter",
		"pages": 123,
		"category": "Fantasia",
		"createdAt": "2023-10-06T13:14:21.752Z",
		"updatedAt": "2023-10-06T13:14:21.752Z"
	}
]
```
##Middlewares
A API inclui middlewares para gerenciamento de erros e validações:

Middleware global de erros: Gerencia todos os erros e exceções da aplicação.
Middleware de verificação de existência do livro: Verifica se um livro existe antes de realizar operações de leitura, atualização ou exclusão.
Middleware de restrição de cadastro de livros com o mesmo nome: Impede a criação de livros com nomes duplicados.
Finalização
Após seguir todos os passos acima e realizar as configurações necessárias, execute npm run test para garantir que a API atenda a todos os requisitos e que os testes sejam bem-sucedidos.

Desenvolvedor
Esta API foi desenvolvida por Eduardo Aguiar.

Divirta-se desenvolvendo com a API de Gerenciamento de Livros!
