import { Application } from "express"


export interface  WebAdapter
{    
    app: Application

    init(): void
    
    build(): void
    
    callback(): Application
    
    close(): void
    
    listen(port: string): void
    

}

export default WebAdapter