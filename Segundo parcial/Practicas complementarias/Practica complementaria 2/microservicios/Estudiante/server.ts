import express, { Router, Express } from "express";
import cors from 'cors';

import { router as estudiantes } from './routes/estudiante'

import { dbConnection } from "./database/config";

import dotenv from 'dotenv';
dotenv.config()

class Server {
    app: Router;
    router: Router;
    port:Number;
    paths: { [ key:string ] : string };
    private _express: Express;
    constructor(){
        this.app = Router();
        this.router = Router();
        this.port= Number(process.env["PORT"]);
        this.paths = {
            estudiante: '/api/estudiante',
        }
        this.conectarDB();
        this.middleware();
        this.routes();
        this.router.use('/v2/sextob', this.app);
        this._express = express().use(this.router);
    }
    private async conectarDB(){
        await dbConnection()
    }
    private middleware(){
        this.app.use(cors());
        this.app.use(express.json());
    }
    private routes(){
        this.app.use(this.paths.estudiante, estudiantes);
    }
    listen(){
        this._express.listen(this.port, () => {
            console.log(`Server on port ${this.port}`);
        })
    }
}

export { Server }
