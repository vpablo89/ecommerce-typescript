

import mongoose, { Connection } from "mongoose";
import { IDBAdapter } from "./IDBAdapter";


class MongooseAdapter implements IDBAdapter{
    
    private connection!: Connection    

    async init(uri: string = ''): Promise<void> {
       const mongooseInstance = await mongoose.connect(uri)
       this.connection = mongooseInstance.connection
       if(this.connection.readyState === 1)
       {
           console.log('Connected to database')
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