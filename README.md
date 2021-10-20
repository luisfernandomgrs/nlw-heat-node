# NLW Heat

Console

```bash
# install yarn
yarn init -y

# install express
yarn add express

# install: @types/express, typescript and ts-node-dev
yarn add -D @types/express typescript ts-node-dev

# initialize tsc
yarn tsc --init
```

> Para executar nossa aplicação: Yarn dev
> 

Quando estiver usando prisma... Será necessário incluir o seguinte bloco em seu arquivo "Pakage.json" para que suas alterações façam com o um reload aconteça, refletindo suas alterações no DB...
--exit-child

```json
"scripts": {
    "dev": "ts-node-dev --exit-child src/app.ts"
  },
```

- Considerações
    
    No arquivo "tsconfig.json" altere:
    Pois o TypeScript já fará as verificaçòes de código, validando a semantica...
    
    ```json
    strict: false;
    target": "es2017"
    ```
    

# Instalando e configurando o [Prisma]

Documentação em:

[Prisma - Next-generation Node.js and TypeScript ORM for Databases](https://www.prisma.io/)

O [Quickstart] é a forma ideal para um novo projeto que será iniciado...
No nosso caso, iremos seguir os procedimentos descritos em: "Add to existing project"

## Add to existing project

- Console
    1. yarn add prisma -D
    2. Invoke prisma with/Inicialize o Prisma com:
    yarn prisma init

# Instalando o dotenv

- Esta dependência é necessária para usar o process.env nas rotas do projeto, injetanto variáveis como parâmetro...
    
    ```bash
    yarn add dotenv
    ```
    

# Instalando o Axios

- Esta dependência permitirá a comunicação com o Github e recuperar o token do usuário no Github.
    
    ```bash
    # install axios
    yarn add axios
    
    #instal typedefs to use axios
    yarn add @types/axios -D
    ```
    

# Instalando o JSonWebToken

- Esta dependência nos ajudará a usar o Token retornado pelo Gitbub...
Basicamente ela nos ajudará a criar um Token do tipo JWT (JasonWebToken) para armazenarmos em nosso DB.
    
    ```bash
    # install jwt
    yarn add jsonwebtoken
    
    # install typedefs to use jwt
    yarn add @types/jsonwebtoken -D
    ```
    

# Migrations

```bash
# create migration and install dependence prisma client...
yarn prisma migrate dev
```

# Usando prisma studio

Uma Web API para visualizar o conteúdo do seu DB...

```bash
yarn prisma studio
```

# Usando WebSocket

API de comunicação síncrona

```bash
yarn add socket.io

# install dtypedefs to uso socket.io
yarn add @types/socket.io -D
```

# Usando Cors

Possui a responsabilidade de permitir ou negar uma requisição, dentro da aplicação;
Através de permissões que devemos habilitar dentro do Cors, será possível permitir que outras fontes possam se conectar à nossa aplicação, tanto pelo http ou io.

```bash
yarn add cors

# install typedefs to use...
yarn add @types/cors -D
```