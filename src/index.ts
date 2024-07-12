import dotenv from 'dotenv'
import { Environment } from 'env-types';
import AppExpress from './presentation/application/AppExpress';


dotenv.config()
Environment.load()

const PORT: number =  Number(8081)


const app = new AppExpress()

app.init()
app.build()
app.listen(PORT)