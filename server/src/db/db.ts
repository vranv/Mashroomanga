import {Pool} from 'pg'

export const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'mushroomanga',
    password: '1005',
    port: 3001,
})