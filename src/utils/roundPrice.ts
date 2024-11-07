export const roundPrice = (originPrice: number) => {
    return Math.round(originPrice * 100) / 100;
}