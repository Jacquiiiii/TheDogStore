# 🐶 The Dog Store 🐶

The Dog Store is a mock e-commerce application that sells dog supplies. This project was intended for development practice only. 

[⭐ Deployed on Vercel]("https://the-dog-store.vercel.app/")

## Tech stack:

Front-end:
- Create React App
- Typescript
- React Router
- Redux, Redux Toolkit, Redux Toolkit Query
- Styled Components

Back-end:
- Node JS
- Express
- PostgreSQL
- Sequelize

Testing:
- React testing library
- Jest

CI/CD:
- GitHub Actions
- Vercel

## Getting started:
- Clone this repository
- Install dependencies: `npm install`
- Set up the database:
  - `CREATE DATABASE database_name;`
  - `CREATE USER user WITH PASSWORD 'password';`
- Set up the test database:
  - `CREATE DATABASE database_name;`
  - `CREATE USER user WITH PASSWORD 'password';`
- Run the migration scripts and seed the database:
  - `npx sequelize-cli db:migrate`
  - `npx sequelize-cli db:seed:all`
- Run the migration scripts and seed the test database:
  - `npx sequelize-cli db:migrate --env test`
  - `npx sequelize-cli db:seed:all --env test`
- Create a .env file (refer to .envExample for template)

## Running the app in development:
- `npm run backend:dev`
- `npm run dev`

## Running unit tests:
- Run front-end tests: `npm run test`
- Run back-end tests: `npm run test:backend`

## Accessing psql:
- WSL: `sudo -u postgres psql database_name`
- MacOs: `psql -U username -d database_name`

## Database queries:
- To see all products: `SELECT * FROM "Products";`
- To see all users: `SELECT * FROM "Users";`