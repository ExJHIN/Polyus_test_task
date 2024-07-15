import { useState, useEffect, useCallback } from 'react';
import {TableData} from "./types.ts";
import {initialTableData} from "./constants.ts";

export const useTable = () => {
  const [dataTable, setTableData] = useState<TableData>(initialTableData);
  const [editTimeout, setEditTimeout] = useState<NodeJS.Timeout | null>(null);
  const [countdown, setCountdown] = useState<number | null>(null);
  const [editedCells, setEditedCells] = useState<{ [key: number]: string }>({});

  const isTableDataChanged = (newData: TableData) => {
    return JSON.stringify(newData) !== JSON.stringify(initialTableData);
  };

  const handleEdit = useCallback((id: number, value: string, isHeader: boolean = false) => {
    let newDataTable: TableData;

    if (isHeader) {
      const newHeaders = dataTable.headers.map((header) =>
        header.id === id ? { ...header, value } : header
      );
      newDataTable = { ...dataTable, headers: newHeaders };
    } else {
      const newRows = dataTable.rows.map((row) => ({
        cells: row.cells.map((cell) => (cell.id === id ? { ...cell, value } : cell)),
      }));
      newDataTable = { ...dataTable, rows: newRows };
    }

    setTableData(newDataTable);
    setEditedCells((prev) => ({ ...prev, [id]: value }));

    if (editTimeout) {
      clearTimeout(editTimeout);
    }

    if (isTableDataChanged(newDataTable)) {
      setCountdown(null);
      setEditTimeout(setTimeout(() => setCountdown(10), 5000));
    } else {
      setCountdown(null);
    }
  }, [dataTable, editTimeout]);

  useEffect(() => {
    if (countdown !== null) {
      if (countdown > 0) {
        const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
        return () => clearTimeout(timer);
      } else {
        console.log('Edited Data:', editedCells);
        setCountdown(null);
      }
    }
  }, [countdown, editedCells]);

  return { dataTable, handleEdit, countdown };
};
