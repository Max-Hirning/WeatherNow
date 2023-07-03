export const getTemparuture = (value: number): number => {
    return Math.round(value - 273.15)
}