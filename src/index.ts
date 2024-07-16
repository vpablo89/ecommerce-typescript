import dotenv from 'dotenv'
import { Environment } from 'env-types';

import AppFactory from './presentation/factories/AppFactory';

dotenv.config()
Environment.load()

const PORT: number =  Number(8081)


const app = AppFactory.create(process.env.APP_TYPE || 'AppExpress')


app.init()
app.build()
app.listen(PORT)