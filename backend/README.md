# AdonisJS v5 for Backend 

Using repository and service pattern

## Setup

1. Clone this repository `git clone https://github.com/rsydfhmy03/mishofey.git`
2. Copy file `.env.example` to `.env`
3. Create database
4. Change database name and connection in `.env`
5. Run command `npm install` to install dependencies
6. Run command `node ace migration:run`
6. Run server with `npm run dev`

## Creating Module

Create model, repository, service, controller, validators and route using below command:

```bash
node ace make:module <Namespace> <ModelName> --endpoint <EndpointName> --soft-delete --uuid
```

Example: I will make module for user table with soft delete

```bash
node ace make:module User User --endpoint users --soft-delete
```

Notes:

1. Namespace is required and using CamelCase.
2. ModelName is required and using CamelCase.
3. EndpointName is required and using lowercase. If endpoint have more than one word, separate them with `-`.
4. --soft-delete is optional. Use only when your table has `deleted_at` column.
5. --uuid is optional. Use only when your primaryKey using uuid.


### developer : mitahudev03
