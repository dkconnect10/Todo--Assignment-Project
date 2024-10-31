import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { connection } from './db/index.js';
import todoRoutes from './index.js'

dotenv.config({
  path: './.env',
});

const app = express();
app.use(bodyParser.json());

connection(); // Connect to the database
app.use('/todos', todoRoutes);

app.listen(process.env.PORT || 2000, () => {
  console.log(`Server running on port ${process.env.PORT || 2000}`);
});
