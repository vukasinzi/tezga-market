import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT!), 
    database: process.env.DB_NAME,
});

export async function query(text: string, params?: any[]) {
    const rezultat = await pool.query(text, params);
    return rezultat;
}