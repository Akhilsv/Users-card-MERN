import express from 'express';
import { Db } from './config/Db.js';
import dotenv from 'dotenv';
import cors from 'cors';
import router from './Routes/routes.js';


const app = express();
dotenv.config();
Db();
app.use(cors());
app.use(express.json());


app.use('/', router);
const PORT = '5000';

app.listen(PORT, () => console.log('Server Started'));






