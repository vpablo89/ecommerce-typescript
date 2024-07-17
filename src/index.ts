import dotenv from 'dotenv'
dotenv.config()
import { Environment } from 'env-types';

import AppFactory from './presentation/factories/AppFactory';
import DBFactory from './data/factories/DBFactory';

Environment.load()

const PORT: number =  8081


void(async()=>{
    
    const db = DBFactory.create('MongooseAdapter')
    db.init('mongodb+srv://verapablodaniel1989:Florista1909@verapablomongodb.7nd8dan.mongodb.net')
    
    const app = AppFactory.create(process.env.APP_TYPE || 'AppExpress')   
    
    app.init()
    app.build()
    app.listen(PORT)

})()
