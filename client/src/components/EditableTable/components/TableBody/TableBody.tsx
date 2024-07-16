import styles from './TableBody.module.scss';
import { TableBodyProps } from './types.ts';
import { ChangeEvent, useCallback } from 'react';
import { getValidateTableValue } from '../../../../utils/getValidateTableValue';

export function TableBody({ rows, handleEdit }: TableBodyProps) {
  /**
   * Обработчик изменения значений в ячейках таблицы.
   *
   * @param {number} id - Идентификатор редактируемой ячейки.
   * @param {'text' | 'number' | 'percent'} type - Тип данных в ячейке.
   * @returns {(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void} Функция-обработчик событий.
   */
  const handleInputChange = useCallback((id: number, type: 'text' | 'number' | 'percent') => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const nullableValue = getValidateTableValue(e.target.value, type);

    if (nullableValue !== null) {
      handleEdit(id, nullableValue);
    }
  }, [handleEdit]);

  return (
    <tbody>
    {rows.map((row, rowIndex) => (
      <tr key={rowIndex}>
        {row.cells.map(({ id, value, rowspan, colspan, type }) => (
          <td
            key={id}
            className={`${styles.bodyCell} ${id === 8 ? styles.statusText : ''}`}
            colSpan={colspan || 1}
            rowSpan={rowspan || 1}
          >
            {id === 7 ? (
              <textarea
                className={styles.bodyTextarea}
                value={value}
                onChange={handleInputChange(id, 'text')}
              />
            ) : (
              <input
                className={styles.bodyInput}
                value={type === 'percent' ? `${value}%` : value}
                onChange={handleInputChange(id, type)}
              />
            )}
          </td>
        ))}
      </tr>
    ))}
    </tbody>
  );
}
