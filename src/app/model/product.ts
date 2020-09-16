export class Product {
    id?: number;
    name?: string;
    price?: number;
    description?: string;
    creationDate?: number;
    thumbnailUrl?: any;

    constructor(product?: Product) { 
        if (product) {
            this.id = product.id;
            this.name = product.name;
            this.price = product.price;
            this.description = product.description;
            this.creationDate = product.creationDate;
            this.thumbnailUrl = product.thumbnailUrl;
        }
    }
}
