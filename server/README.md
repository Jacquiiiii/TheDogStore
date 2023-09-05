# 🐶 The Dog Store 🐶

The Dog Store is a mock e-commerce application that sells dog supplies. This project was intended for development practice only.

Deployed on [Heroku](https://dog-store-2707e4902db3.herokuapp.com/)

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
- Sequelize as ORM

Testing:
- React testing library
- Jest
- Storybook
- Coming soon: Cypress

CI/CD:
- Husky for pre-commit unit tests
- GitHub Actions

## Getting started:
- Clone this repository
- Install dependencies: `npm install`
- Set up a development PostgreSQL database:
  - `CREATE DATABASE database_name;`
  - `CREATE USER user WITH PASSWORD 'password';`
- Set up the test PostgreSQL database:
  - `CREATE DATABASE database_name;`
  - `CREATE USER user WITH PASSWORD 'password';`
- Run the migration scripts and seed the development database:
  - `npx sequelize-cli db:migrate`
  - `npx sequelize-cli db:seed:all`
- Run the migration scripts and seed the test database:
  - `npx sequelize-cli db:migrate --env test`
  - `npx sequelize-cli db:seed:all --env test`
- Create a .env file and add relevant secrets (refer to .env.example for template)

## Running the app in development:
- `npm run backend:dev`
- `npm run dev`

## Running unit tests:
- Run front-end tests: `npm run test`
- Run back-end tests: `npm run test:backend`

## Accessing psql:
- WSL: `sudo service postgresql start && sudo -u postgres psql database_name`
- MacOs: `psql -U username -d database_name`

## Database queries:
- To see all products: `SELECT * FROM "Products";`
- To see all users: `SELECT * FROM "Users";`
- To see all orders: `SELECT * FROM "Orders";`