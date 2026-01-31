import {Router, Request, Response} from 'express'
import {query} from '../db'

const router = Router();

async function GET(req : Request, res : Response){
    try {
        const rezultat = await query('select * from oglasi');
        res.json(rezultat.rows);
    } catch ( error : any) {
        res.status(500).send('Greska');
    }
}