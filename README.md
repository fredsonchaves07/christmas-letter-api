<h1 align="center">
    🎅 🎁 🎄 Chistmas Letter API
</h1>

## 📌 Content

- [About](#-about)
- [Technology](#-technology)
- [Installation and Configuration](#-installation-and-configuration)
   - [Database](#database)
   - [Installation of Depedences](#installation-of-depedences)
   - [Migrations](#migrations)
   - [Tests](#tests)
- [Running the API](#-running-the-api)
- [Build](#-build)
- [Endpoint structure](#-endpoint-structure)
   - [GET](#GET)
   - [POST](#POST) 
- [Issues](#-issues)
- [Contribution](#-contribution)

## 🚀 About

This repository contains the source code of the Api Chistmas Letter. The technologies used are described in Technology. The api is stored on the [aws server](https://aws.amazon.com/pt/). To access click [here](http://18.228.10.190:5000/letter)

## 💻 Technology

- [Typescript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [Yarn](https://yarnpkg.com/)
- [Babel](https://babeljs.io/)
- [Jest](https://jestjs.io/)
- [Postgres](https://www.postgresql.org/)
- [TypeORM](https://typeorm.io/#/)

## 🛠️ Installation and Configuration

To run the api in a development environment, it is necessary to have the tools installed. Can be consulted in the technology section

### Database

Required has the most up-to-date version of [postgres](https://www.postgresql.org/). Change the `username` and `password` variables in the `ormconfig.ts` file

```json
[
    {
        "name": "default",
        "type": "postgres",
        "host": "localhost",
        "username": "postgres",
        "password": "postgres",
        "database": "christmasletterdb",
        "migrations": [
            "**/database/migrations/**.ts"
        ],
        "entities": [
            "**/entity/**.ts"
        ],
        "cli": {
            "migrationsDir": "**/database/migrations"
        }
    }
]
```

### Installation of Dependencies

Run the command to perform the dependency installation

```bash
yarn install
```

### Migrations

Run the command to apply the migrations

```bash
yarn typeorm migration:run
```

### Tests

Run the tests and check for inconsistencies

```bash
yarn test
```

## ⚙️ Running the API

Run API in development mode after installation and configuration

```bash
yarn dev
```

## 🏭 Build

To build api by running the command

```bash
yarn build
```

After the build the Api can be executed

```bash
yarn start
```

## 🌎 Endpoint structure

The endpoint `letter` is structured in the `GET` and `POST` methods

### GET

- [`http://18.228.10.190:5000/letter`](http://18.228.10.190:5000/letter)
After the request, it should be returned in json format as an example
```json
[
    {
        "id": "string",
        "sender": "string",
        "message": "string",
        "created_at": "string"
    }
]
```


### POST

- [`http://18.228.10.190:5000/letter`](http://18.228.10.190:5000/letter)

Request body example 

```json
{
    "sender": "string",
    "message": "string"
}
```
After the request, it should be returned in json format as an example
```json
{
    "id": "string",
    "sender": "string",
    "message": "string",
    "created_at": "string"
}
```

## 🐛 Issues

I would love to review your pull request! Open a new [issue](https://github.com/fredsonchaves07/christmas-letter-api/issues)

## 🤝 Contribution

Feel free to contribute to the project. I am open for suggestions. Click [here](https://github.com/fredsonchaves07/christmas-letter-api/issues) to open a new issue :smile:


---
Developed :blue_heart: by  Fredson Chaves
