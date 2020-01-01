# Microservices-Docker-GraphQL

This repo is an tutorial made by [Lucas Chen](https://dev.to/bettercodingacademy) and I cloned it to practice Microservice.

## How to use

### 1. Up containers

```bash
$ docker-compose up
```

### 2. Build the relevant tables

```bash
$ docker exec -it [listings-container] bash

$ yarn db:migration

$ docker exec -it [users-container] bash

$ yarn db:migration
```

After migration, check those tables exist in DB.