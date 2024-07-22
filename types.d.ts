export interface Product {
    id: number,
    name: string,
    description: string,
    price: number,
    stock: number,
    code: string,
    available: boolean
}

export interface ListOfProducts {
    products: Array<Product>
}

