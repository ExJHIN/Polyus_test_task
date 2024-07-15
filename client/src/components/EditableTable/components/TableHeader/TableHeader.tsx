import styles from './TableHeader.module.scss';
import { TableHeaderProps } from './types.ts';
import React, { useCallback } from "react";
import { useValidateTableHeader } from "../../../../hooks/useValidateTableHeader";

export function TableHeader({ headers, handleEdit }: TableHeaderProps) {
  const { validateInput } = useValidateTableHeader();

  const handleInput = useCallback((id: number) => (e: React.FormEvent<HTMLInputElement>) => {
    validateInput(e, id);
    handleEdit(id, e.currentTarget.value, true);
  }, [validateInput, handleEdit]);

  const handleChange = useCallback((id: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    handleEdit(id, e.target.value, true);
  }, [handleEdit]);

  return (
    <thead>
      <tr>
        {headers.map((header) => (
          <th
            key={header.id}
            className={styles.headerCell}
            colSpan={header.colspan || 1}
            rowSpan={header.rowspan || 1}
          >
            <input
              type="text"
              className={styles.headerInput}
              value={header.value}
              onChange={handleChange(header.id)}
              onInput={handleInput(header.id)}
            />
          </th>
        ))}
      </tr>
    </thead>
  );
}
