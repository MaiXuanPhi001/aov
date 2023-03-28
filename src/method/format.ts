export const numberWithCommas = (x: number): string => {
    const number = x?.toFixed(0)
    return number?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}