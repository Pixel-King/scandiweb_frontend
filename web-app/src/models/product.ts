export type ProductType = 'dvd' | 'book' | 'furniture';

export interface Product{
    sku: string,
    name: string,
    type: ProductType,
    price: number,
    size?: number,
    weight?: string,
    dimensions?: string,
}
