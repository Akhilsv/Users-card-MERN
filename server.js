import express from 'express';
import  Db  from './config/Db.js';
import dotenv from 'dotenv';
import cors from 'cors';
import router from './Routes/routes.js';


const app = express();
dotenv.config();
Db();
app.use(cors());
app.use(express.json());


app.use('/', router);
app.listen(process.env.PORT || 4000, () => {
	console.log(`app listening at http://localhost`);
});








