//const express = require('express');
import express from 'express';
import cors from 'cors';
import UserController from './users/users-controller.js';
import TuitsController from "./tuits/tuits-controller.js";
import AuthController from "./users/auth-controller.js";
import session from "express-session";


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