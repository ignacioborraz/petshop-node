# PET STORE
Backend app developed with nodeJS and express

Views of MVC were generated with HANDLEBARS

Database was manipulated with SEQUELIZE

Unit and Stress tests were run with MOCHA, CHAI, SUPERTEST and FACTORY

Service tests were performed with POSTMAN

Endpoints were documented with APIDOC

---
## Getting started
To run Swagger Pet Store REST API, install node modules with:

>**npm install**

To set the environment variables in .env.
For example:

```
DB_USER = 'root'
DB_PASSWORD = '1234'
DB_NAME = 'petshop'
DB_HOST = '127.0.0.1'
DB_DIALECT = 'mysql'
PORT = '8080'
```
To load the database:

>**npm run data**

To run the app:

>**npm start**

Then enter the following URL in the browser: [*http://localhost:8080/*]( *http://localhost:8080/* "to localhost")

---
## Testing & Coverage
To init test and stress tests:

>**npm run tests**

>**npm run stress**

Then check the tests results in the console

---
## Documentation
To see APIDOC:

>**npm run docs**

Then enter the following URL in the browser: [*http://localhost:8080/public/index.html*]( *http://localhost:8080//public/index.html* "to localhost")