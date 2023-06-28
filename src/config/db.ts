import { DataSource } from "typeorm";
import { join } from "path";
import * as dotenv from 'dotenv';



dotenv.config({path:"src/.env"});



export const datasource= new DataSource(
    {
        type: process.env.DB_TYPE as "postgres",
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT as string),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        entities: [join(__dirname, '../entities/*.ts')],
        synchronize: true,
        schema: process.env.DB_SCHEMA,
    

    }
);