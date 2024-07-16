import express, { Application, urlencoded } from 'express'
import cookieParser from 'cookie-parser'
import compression from 'compression'

import productRouter from '../router/ProductRouter'
import WebAdapter from './WebAdapter'


class AppExpress implements WebAdapter
{
     app: Application
     PRODUCTS_BASE_URL: string = '/api/v1/products'   
    
    constructor()
    {
     this.app = express()
    }
    init(): void
    {
     this.app.use(express.json())
     this.app.use(urlencoded({extended: true}))
     this.app.use(cookieParser())
     this.app.use(compression({
            brotli:{
                enabled: true,
                zlib:{}
            }
        }))   
    }
    build(): void
    {
     this.app.use( this.PRODUCTS_BASE_URL , productRouter )   
    }
    callback(): Application
    {
     return this.app   
    }
    close()
    {

    }
    listen(port: number)
    {
     this.app.listen(port,()=>{
        console.log(`Sever running on port: ${port}`)
     })   
    }

}

export default AppExpress