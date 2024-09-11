import express, { Application, urlencoded } from 'express'
import cookieParser from 'cookie-parser'
import compression from 'compression'
import cors from 'cors'



import productRouter from '../router/ProductRouter'
import userRouter from '../router/UserRouter'
import WebAdapter from './WebAdapter'
import ErrorHandler from '../middlewares/ErrorHandler'
import sessionRouter from '../router/SessionRouter'


class AppExpress implements WebAdapter
{
     app: Application
     PRODUCTS_BASE_URL: string = '/api/v1/products'  
     USERS_BASE_URL: string = '/api/v1/users'
     SESSION_BASE_URL: string = '/api/v1/sessions' 
    
    constructor()
    {
     this.app = express()
    }
    init(): void
    {
     this.app.use(express.json())
     this.app.use(urlencoded({extended: true}))
     this.app.use(cookieParser())  
     this.app.use(cors())   
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
     this.app.use( this.USERS_BASE_URL , userRouter )
     this.app.use( this.SESSION_BASE_URL, sessionRouter)
     this.app.use(ErrorHandler)     
    }
    callback(): Application
    {
     return this.app   
    }
    close()
    {
      
    }
    listen(port: string)
    {
     this.app.listen(port,()=>{
        console.log(`Sever running on port: ${port}`)        
     })   
    }

}

export default AppExpress