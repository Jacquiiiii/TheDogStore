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
- SQlite
- Sequelize

Testing:
- React testing library
- Jest

CI/CD Pipeline:
- GitHub Actions

## Getting started:
- Clone this repository
- `npm install`
- Run the migration scripts and seed the database:
  - `npx sequelize-cli db:migrate`
  - `npx sequelize-cli db:seed:all`
- Create a .env file and add the following: `SECRET=add_your_custom_secret_here`

## To run the app:
- `npm run backend`
- `npm start`

## Unit tests:
- Run front-end tests: `npm run test`
- Run back-end tests: `npm run test:backend`