/**
 * Функция вычисляет процентное значение currentValue до totalValue
 * @param {number} currentValue - текущее значение
 * @param {number} totalValue - максимальное значение
 * @returns {number}
 */
export const percentValue = (currentValue: number, totalValue: number) => {
    return Number(((currentValue * 100) / totalValue).toFixed(0));
};
