import dotenv from 'dotenv'
dotenv.config()

import { Environment } from 'env-types';

import AppFactory from './presentation/factories/AppFactory';
import DBFactory from './data/factories/DBFactory';

Environment.load()

const PORT: string =  process.env.NODE_PORT || '8081'


void(async()=>{
    
    const db = DBFactory.create(process.env.DB)
    console.log(process.env.PORT)
    db.init(process.env.DB_URI || '')
    
    const app = AppFactory.create(process.env.APP_TYPE )   
    
    app.init()
    app.build()
    app.listen(PORT)

})()


