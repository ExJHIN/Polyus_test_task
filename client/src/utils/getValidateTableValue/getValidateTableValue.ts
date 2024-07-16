import { MASKS } from "../../constants/masks";

/**
 * Функция для валидации значения ячейки таблицы в зависимости от типа данных.
 *
 * @param {string} value - Значение для валидации.
 * @param {'text' | 'number' | 'percent' | 'fullName'} type - Тип данных (текст, число, процент или полное имя).
 * @returns {string | null} Возвращает валидированное значение или null, если значение не прошло валидацию.
 */
export function getValidateTableValue(value: string, type: 'text' | 'number' | 'percent' | 'fullName'): string | null {
  if (type === 'number') {
    const validateValue = value.replace(',', '.');

    if (MASKS.number.test(validateValue)) {
      return validateValue
    }
    return null;
  }
  if (type === 'percent') {
    const percentValue = value.slice(0, -1).replace(',', '.');
    if (MASKS.number.test(percentValue)) {
      return percentValue;
    }
    return null;
  }
  if (type === 'fullName' && MASKS.fullName.test(value)) {
    return value;
  }
  if (type === 'text') {
    return value;
  }
  return null;
}
