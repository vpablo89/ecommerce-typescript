import mongoose, { Connection } from "mongoose";
import { IDBAdapter } from "./IDBAdapter";


class MongooseAdapter implements IDBAdapter{
    
    private connection!: Connection    

    async init(uri: string): Promise<void> {
       const mongooseInstance = await mongoose.connect(uri, {dbName: "ecommerce", })
       this.connection = mongooseInstance.connection
       if(this.connection)
       {
        console.log('Base de datos conectada');
        
       }else{
        'No se pudo conectar a la BBDD'
       }
    }
    async close(): Promise<void> {
        if(this.connection)
        {
            await this.connection.close()
        }
    }
    async drop(): Promise<void> {
        this.connection.dropDatabase()
    }
}

export default MongooseAdapter