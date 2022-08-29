import {  
    AlexTableEntity,
    MichaelTableEntity
} from './tables';
import { DataSource } from 'typeorm';

const AppDataSource = new DataSource({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: 3307,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: 'happyic',
    entities: [
        AlexTableEntity,
        MichaelTableEntity
    ]
});

export async function getDatabaseConnection() {
    try {
        const db = await AppDataSource.initialize();
        return db;
    } catch(err) {
        console.log('DB Connection Failed!');
        return null;
    }
}