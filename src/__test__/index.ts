import dotenv from 'dotenv'
dotenv.config()


import AppFactory from "@/presentation/factories/AppFactory"
import DBFactory from "@/data/factories/DBFactory"

interface Server {
    app: any
    db: any
}


const initServer = async (): Promise<Server> => 
    {
        const db = DBFactory.create(process.env.DB)
        db.init(process.env.DB_URI_TEST|| '')

        const app = AppFactory.create(process.env.APPLICATION)

        app.init()
        app.build()

        return {
            app,
            db
        }
    
    }

export default initServer    
