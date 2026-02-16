import express from 'express';
import * as dotenv from 'dotenv'
import sequelize from './config/database.js';
import cors from 'cors'
import router from './routes/index.js'
import { fileURLToPath } from 'url';
import path from 'path';

/*import './models/user.js';
import './models/offer.js';
import './models/review.js';*/

import errorMiddleware from './middleware/ErrorHandlingMiddleware.js';

dotenv.config();

const _filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);

const PORT = process.env.PORT || 5000;

const start = async () => {
    try{
        await sequelize.authenticate();
        await sequelize.sync();
        const app = express();

app.use(cors());
app.use(express.json());
app.use('/static', express.static(path.resolve(_dirname, 'static')));

app.use('/', router);
app.use (errorMiddleware);

app.get('/', (req, res) => {
    res.status(200).json({message: 'Работает'})
})
        app.listen(PORT, () => console.log(`Сервер запущен на порте ${PORT}`));
    } catch(e){
        console.log(e);
    }
}

start();
