import { IDBAdapter } from "./IDBAdapter"
import MongooseAdapter from "./MongooseAdapter"

class DBFactory
{
    static create(DbType: string)
    {
     const dbs = new Map<string, new ()=>  IDBAdapter>()
     dbs.set('MongooseAdapter', MongooseAdapter) 
     
     const DB = dbs.get(DbType)
     if(!DB)
     {
        throw new Error(`Has no DbType for ${DbType}`)
     }
    
     return new DB()
     
    }
}

export default DBFactory