

export interface IDBAdapter{
    
    init(uri: string): void

    close(): void

    drop(): void

}