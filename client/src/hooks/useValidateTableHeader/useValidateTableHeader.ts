import { useCallback } from "react";

export function useValidateTableHeader() {
  const validateInput = useCallback((e: React.FormEvent<HTMLInputElement>, id: number) => {
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
