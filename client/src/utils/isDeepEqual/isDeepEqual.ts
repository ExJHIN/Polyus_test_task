/**
 * Функция для глубокого сравнения двух объектов.
 *
 * @template T Тип объектов для сравнения.
 * @param {T} obj1 Первый объект для сравнения.
 * @param {T} obj2 Второй объект для сравнения.
 * @returns {boolean} Возвращает true, если объекты равны, и false в противном случае.
 */
export function isDeepEqual<T>(obj1: T, obj2: T): boolean {
  if (obj1 === obj2) {
    return true;
  }

  if (!(obj1 instanceof Object) || !(obj2 instanceof Object)) {
    return false;
  }

  const keys1 = Object.keys(obj1) as (keyof T)[];
  const keys2 = Object.keys(obj2) as (keyof T)[];

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    if (!keys2.includes(key) || !isDeepEqual(obj1[key], obj2[key])) {
      return false;
    }
  }

  return true;
}
