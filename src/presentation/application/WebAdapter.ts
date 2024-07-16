import { Application } from "express"


export interface  WebAdapter
{    
    app: Application

    PRODUCTS_BASE_URL: string

    init(): void
    
    build(): void
    
    callback(): Application
    
    close(): void
    
    listen(port: number): void
    

}

export default WebAdapter