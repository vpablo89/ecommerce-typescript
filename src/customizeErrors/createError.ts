export class saveProductError extends Error{
    statusCode: number
    typeError?: string
    constructor(statusCode: number, message: string, typeError?: string)
    {
        super(message)
        this.statusCode = statusCode
        this.typeError = typeError
    }
}