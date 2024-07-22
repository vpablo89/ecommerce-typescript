

export class Product  {
    id: string
    title: string;
    description: string;
    code: string;
    price: number;
    status: boolean;
    stock: number;
    category: string;
    thumbnail: string;

    constructor(
        props: Product
    )
    {
        this.id = props.id
        this.title = props.title
        this.description = props.description
        this.code = props.code
        this.price = props.price
        this.status = props.status
        this.stock = props.stock
        this.category = props.category
        this.thumbnail = props.thumbnail
    }
}