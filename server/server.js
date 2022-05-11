const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors');
const path = require('path');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const cors = require('cors');
const { handleError } = require('./middleware/errorMiddleware');
const connectDatabase = require('./config/database');
const port = process.env.PORT || 5001;
const indexRouter = require('./routes/index');
const chatroomRouter = require('./routes/chatroom');

connectDatabase();
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/chatroom/users', chatroomRouter);

app.use(handleError);
app.use(session({ secret: 'cats', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => console.log(`Server started on port ${port}`));
