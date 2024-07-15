import styles from './TableBody.module.scss';
import { TableBodyProps } from './types.ts';
import React, { useCallback } from 'react';
import { useValidateTableBody } from '../../../../hooks/useValidateTableBody';

export function TableBody({ rows, handleEdit }: TableBodyProps) {
  const { validateInput } = useValidateTableBody();

  const handleInputChange = useCallback((id: number, type: 'text' | 'number' | 'percent') => (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const validValue = validateInput(e.target.value, type);
    handleEdit(id, validValue);
  }, [validateInput, handleEdit]);

  return (
    <tbody>
      {rows.map((row, rowIndex) => (
        <tr key={rowIndex}>
          {row.cells.map((cell) => (
            <td
              key={cell.id}
              className={`${styles.bodyCell} ${cell.id === 8 ? styles.statusText : ''}`}
              colSpan={cell.colspan || 1}
              rowSpan={cell.rowspan || 1}
            >
              {cell.id === 7 ? (
                <textarea
                  className={styles.bodyTextarea}
                  value={cell.value}
                  onChange={handleInputChange(cell.id, 'text')}
                />
              ) : (
                <input
                  type={cell.type === 'number' ? 'number' : 'text'}
                  className={styles.bodyInput}
                  value={cell.type === 'percent' ? `${cell.value}%` : cell.value}
                  onChange={handleInputChange(cell.id, cell.type)}
                />
              )}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}
