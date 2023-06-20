//const express = require('express');
import express from 'express';
import cors from 'cors';
import UserController from './users/users-controller.js';
import TuitsController from "./tuits/tuits-controller-old.js";
import AuthController from "./users/auth-controller.js";
import session from "express-session";
import mongoose from 'mongoose';

//mongoose.connect('mongodb://127.0.0.1:27017/tuiter', {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connect('mongodb+srv://liyangp:a249129917@cluster0.9i0oecu.mongodb.net/tuiter?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

const app = express();

app.use(
 session({
   secret: "any string",
   resave: false,
   saveUninitialized: true,
 })
);

app.use(cors(
    {
        origin: 'http://localhost:3000',
        credentials: true
    }
));
app.use(express.json());

TuitsController(app);
UserController(app);
AuthController(app);



app.listen(process.env.PORT || 4000);