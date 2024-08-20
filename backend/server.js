import express from 'express';
import findFreePort from 'find-free-port';
import cors from 'cors';
import dotenv from 'dotenv';
import conectDB from './conectdb/config.js';
import productRoute from './route/productroute.js';
import { errorHandler } from './midlewares/errMidleware.js';
dotenv.config();
const app = express();

//Conecction to MongoDB
conectDB();

// Use CORS middleware
app.use(cors());


//routes
app.use('/', productRoute);

// Midlware for errorHandler
app.use(errorHandler);

const defaultPort = 8080;
findFreePort(defaultPort, (err, freePort) => {
    if (err) {
        console.error('Error finding free port:', err);
        return;
    }
    app.listen(freePort, () => {
        console.log(`Server is running on http://localhost:${freePort}`);
    });
});