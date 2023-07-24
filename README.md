# The Dog Store

The Dog Store is a mock e-commerce application that sells dog supplies. This project was intended for development practice only. 

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

CI/CD Pipeline:
- GitHub Actions

## Getting started:
- Clone this repository
- Install dependencies: `npm install`
- Set up the database:
  - `CREATE DATABASE database_name;`
  - `CREATE USER user WITH PASSWORD 'password';`
- Run the migration scripts and seed the database:
  - `npx sequelize-cli db:migrate`
  - `npx sequelize-cli db:seed:all`
- Create a .env file (refer to .envExample for template)

## Running the app:
- `npm run backend`
- `npm start`

## Running unit tests:
- Run front-end tests: `npm run test`
- Run back-end tests: `npm run test:backend`

## Accessing psql (wsl users):
- `sudo -u postgres psql database_name`