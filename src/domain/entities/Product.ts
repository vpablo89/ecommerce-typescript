interface IProduct {
    id: string
    title: string;
    description: string;
    code: string;
    price: number;
    status: boolean;
    stock: number;
    category: string;
    thumbnail: string;
}



export class Product  {   
    id: string; 
    title: string;
    description: string;
    code: string;
    price: number;
    status: boolean;
    stock: number;
    category: string;
    thumbnail: string;

    constructor(
        product: IProduct
    )
    {
        {
        this.id = product.id    
        this.title = product.title
        this.description = product.description
        this.code = product.code
        this.price = product.price
        this.status = product.status
        this.stock = product.stock
        this.category = product.category
        this.thumbnail = product.thumbnail
        }
    }
    
}