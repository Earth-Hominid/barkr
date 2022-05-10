const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors');
const { handleError } = require('./middleware/errorMiddleware');
const connectDatabase = require('./config/database');
const port = process.env.PORT || 5001;

connectDatabase();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(handleError);
app.listen(port, () => console.log(`Server started on port ${port}`));
