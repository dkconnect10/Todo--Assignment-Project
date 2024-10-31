import mysql from 'mysql2/promise';
import dotenv from 'dotenv';


dotenv.config({
    path: './env',
});

 const connection = async () => {
  try {
    const db = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      port: process.env.DB_PORT,
    });

    console.log('Database connected successfully');
    return db;
  } catch (error) {
    console.error('Error connecting to the database:', error);
    console.log('DB_USER:', process.env.DB_USER);
console.log('DB_PASSWORD:', process.env.DB_PASSWORD);

    throw error;
  }
};


export {connection}