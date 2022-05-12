# Barkr | Message Clubhouse

An exclusive member clubhouse built with the MERN stack.

![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

## Description

Barkr is a microblogging and social networking service on which users post and interact with messages known as "barks". Registered users can post and comment barks, however, unregistered users have the ability to only read barks that are publicly available.

The back-end of the project is built using the ExpressJS framework, along with Mongoose and MongoDB.

The front-end was developed using React.

Authentication is implemented using PassportJS along with bcyrptJS.

## Features

Added a middleware folder to assist when the 'req.body.message' causes an error. Instead of returning html, the error middleware will overwrite the "express error handler" and provide the stack information when in development mode.

```js
const handleError = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;

  res.status(statusCode);

  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
};

module.exports = { handleError };
```

### Dependencies & Development Dependencies

- [Express](https://expressjs.com/)
- [Express Async Handler](https://github.com/Abazhenov/express-async-handler)
- [Express Validator](https://www.npmjs.com/package/express-validator)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Nodemon](https://nodemon.io/) - Development dependency
- [Mongoose](https://mongoosejs.com/)
- [Colors](https://www.npmjs.com/package/colors) - Colored text for the console.
