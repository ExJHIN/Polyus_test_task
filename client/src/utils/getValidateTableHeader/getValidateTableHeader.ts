import {FormEvent, useCallback} from "react";

/**
 * Функция валидации заголовков таблицы.
 *
 * @returns {Object} Объект, содержащий функцию для валидации ввода в заголовках таблицы.
 */
export function getValidateTableHeader() {
  const validateInput = useCallback((e: FormEvent<HTMLInputElement>, id: number) => {
    if (id === 3) {
      const input = e.nativeEvent as InputEvent;
      const currentValue = e.currentTarget.value + (input.data || '');

      if (/[^А-Яа-яA-Za-z.: ]/.test(currentValue)) {
        e.currentTarget.value = currentValue.replace(/[^А-Яа-яA-Za-z.: ]/g, '');
        e.preventDefault();
      }
    }
  }, []);

  return { validateInput };
}
