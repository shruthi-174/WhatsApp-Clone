//ES5 const express=require('express')

//FOLLOWING CODE IS OF ES6 VERSION
import express from 'express'; 
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

//components
import connection from './database/db.js';
import Route from './routes/Route.js';

dotenv.config();
const app=express();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/',Route);

const PORT=8000;
const username=process.env.MONGO_USERNAME;
const password=process.env.MONGO_PASSWORD;

connection(username,password);
app.listen(PORT,()=>console.log(`Server is running sucessfully on PORT ${PORT}`));
