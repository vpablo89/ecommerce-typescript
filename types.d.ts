export interface Product {
    id: number,
    name: string,
    description: string,
    price: number,
    stock: number,
    code: string,
    available: boolean
}

export interface ProductDocument extends Omit<Product, 'id'> {
    _id: ObjectId;
}

export interface ListOfProducts {
    products: Array<Product>
}

