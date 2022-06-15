# BooksBackendAPI 📖 📕

[![API](https://img.shields.io/badge/BooksAPI-GrupoBien-brightgreen.svg?style=flat-square)](https://makeapullrequest.com)

Express api backend for books system.

This is a app for building REST APIs in Node.js using ES6(type modules) and Express with and JWT-Simple Authentication.

# Getting Started

Clone the repo:

```
  $ git clone https://github.com/GrupoBien/BooksBackendAPI.git
```

Go to file

```
  $ cd BooksBackendAPI
```

Install the dependencies:

```
  $ npm install
  OR
  $ yarn install
```

# Features

| <center>`Feature`</center> | <center>`Summary`</center>                                             |
| -------------------------- | ---------------------------------------------------------------------- |
| **NoSQL database**         | MongoDB object data modeling using [Mongoose](https://mongoosejs.com/) |
| **Encrypt**                | Hash password with [bcrypt](https://www.npmjs.com/package/bcrypt)      |
| **Authentication**         | Using [JWT-Simple](https://www.npmjs.com/package/jwt-simple)           |
| **Validator**              | Request data validation using [Joi](https://joi.dev/api/)              |
| **Logging**                | Using [morganjs](https://www.npmjs.com/package/morgan)                 |
| **Environment variables**  | Using [dotenv](https://www.npmjs.com/package/dotenv)                   |
| **Husky**                  | Using [husky](https://www.npmjs.com/package/husky)                     |

# Commands

Running in local:

```
  $ npm run local
  OR
  $ yarn local
```

Running in development:

```
  $ npm run dev
  OR
  $ yarn dev
```

Running in production:

```
  $ npm run start
  OR
  $ yarn start
```

# Environments Variables

Please create a `.env` file in the root directory with the following variables:

```
PORT=
DATABASE_PORT=
DATABASE_NAME=
DATABASE_HOST=
DATABASE_USER=
DATABASE_PASSWORD=
```
