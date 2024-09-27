# Simulação REST API NodeJS  v0.0.1


## Começando

### 1. Crie este repositório

* Faça o download do projeto
* Abra o VSCode 
* Abra a pasta extraída do github no VsCode (no link de referência acima)
* Abra o terminal do VsCode e insira os comando para criar o repositório na pasta:

 `git init`
 
 `git add .`
 
 `git commit -m "Iniciado projeto API e NodeJS"`

 `git branch -M main`
 
 `git remote add origin url_do_repositorio` (inserir link de seu novo repositorio criado no github ex. https://github.com/seu_usuario/nome_repositorio.git)

 `git push -u origin main`


### 2. Execute o servidor na sua máquina

 
- Abrir a pasta do projeto que você baixou e acessar o terminal do VSCode 
 
- Instale o servidor Json (API Local da sua máquina)
  
   `npm install`

   
-  Execute o servidor com a base de dados

   `npm start`

## Acessando servidor local


- O servidor será executado em `http://localhost:4589`. Só abrir qualquer browser e digitar que será aberta a página inicial do API.

Você pode testar com o endpoint público: `https://insprak-delivery-api-0729615f05f3.herokuapp.com/users` (método GET).

## Manipulando os dados
Com o Postment ou qualquer ferramenta de gestão de comunicação você pode alterar os dados de API, ou criar novas informações.

Para isso só utilizar os comandos abaixo.


#### Insprak Delivery (GET)

- Obter usuários: GET /users
- Obter usuários por ID: GET /users/{id}
- Obter restaurantes: GET /restaurants
- Obter pedidos: GET /orders
- Obter carrinhos: GET /carts 

#### Insprak Delivery (POST)

- Obter usuários (body): POST /users
- Obter restaurantes (body): POST /restaurants
- Obter pedidos (body): POST /orders
- Obter carrinhos (body): POST /carts 

#### Insprak Delivery (PUT / PATCH)

- Atualizar usuários (body): PUT /users/{id}
- Atualizar usuários (body parcial): PATCH /users/{id} 
- Atualizar restaurantes (body): PUT /restaurants/{id}
- Atualizar restaurantes (body parcial): PATCH /restaurants/{id} 
- Atualizar pedidos (body): PUT /orders/{id}
- Atualizar pedidos (body parcial): PATCH /orders/{id} 
- Atualizar carrinhos (body): PUT /carts/{id}
- Atualizar carrinhos (body parcial): PATCH /carts/{id}  

#### Insprak Delivery (DELETE)

- Remover usuários: DELETE /users 
- Remover restaurantes: DELETE /restaurants
- Remover pedidos: DELETE /orders
- Remover carrinhos: DELETE /carts 


##### Exemplos de Filtros
- http://localhost:4589/users/1
- http://localhost:4589/users?active=true
- http://localhost:4589/users?firstName=John
