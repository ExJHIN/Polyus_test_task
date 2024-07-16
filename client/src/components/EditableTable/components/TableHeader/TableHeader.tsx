import styles from './TableHeader.module.scss';
import { TableHeaderProps } from './types.ts';
import { ChangeEvent, FormEvent, useCallback } from "react";
import { getValidateTableHeader } from "../../../../utils/getValidateTableHeader";

export function TableHeader({ headers, handleEdit }: TableHeaderProps) {
  const { validateInput } = getValidateTableHeader();

  /**
   * Обработчик событий ввода в ячейки заголовка.
   *
   * @param {number} id - Идентификатор редактируемого заголовка.
   * @returns {(e: FormEvent<HTMLInputElement>) => void} Функция-обработчик событий.
   */
  const handleInput = useCallback((id: number) => (e: FormEvent<HTMLInputElement>) => {
    validateInput(e, id);
    handleEdit(id, e.currentTarget.value, true);
  }, [validateInput, handleEdit]);

  /**
   * Обработчик событий изменения в ячейках заголовка.
   *
   * @param {number} id - Идентификатор редактируемого заголовка.
   * @returns {(e: ChangeEvent<HTMLInputElement>) => void} Функция-обработчик событий.
   */
  const handleChange = useCallback((id: number) => (e: ChangeEvent<HTMLInputElement>) => {
    handleEdit(id, e.target.value, true);
  }, [handleEdit]);

  return (
    <thead>
    <tr>
      {headers.map(({ id, value, colspan = 1, rowspan = 1 }) => (
        <th
          key={id}
          className={styles.headerCell}
          colSpan={colspan}
          rowSpan={rowspan}
        >
          <input
            type="text"
            className={styles.headerInput}
            value={value}
            onChange={handleChange(id)}
            onInput={handleInput(id)}
          />
        </th>
      ))}
    </tr>
    </thead>
  );
}
