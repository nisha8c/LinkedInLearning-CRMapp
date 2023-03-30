import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import { Request, Response, Application } from 'express';
import routes from './src/routes/crmRoutes';

import * as dotenv from 'dotenv';
dotenv.config();

const app: Application = express();
const PORT = 3000;

// mongoose connection
const initMongoose = () => {
    if (mongoose.connection.readyState === 1) {
        return mongoose.connection.asPromise();
    }
    return mongoose.connect(process.env.MONGO_URL || '');
}
initMongoose();


// body-parser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

routes(app);

// serving static files
app.use(express.static('public'));

app.get('/', (req, res) =>
    res.send(`Node and express server is running on port ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`your server is running on port ${PORT}`)
);