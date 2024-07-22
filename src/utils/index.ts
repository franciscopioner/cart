export function formatPrice(price: number): string {
    return `R$ ${price.toFixed(2).replace('.', ',')}`;
}
