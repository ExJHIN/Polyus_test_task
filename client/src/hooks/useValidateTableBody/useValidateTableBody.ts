import { useCallback } from "react";

export function useValidateTableBody() {
  const validateInput = useCallback((value: string, type: 'text' | 'number' | 'percent'): string => {
    let validValue = value;

    // Валидация в зависимости от типа
    if (type === 'number') {
      validValue = value.replace(/[^0-9]/g, '');
    } else if (type === 'percent') {
      validValue = value.replace(/[^0-9.]/g, '');
    }

    return validValue;
  }, []);

  return { validateInput };
}
