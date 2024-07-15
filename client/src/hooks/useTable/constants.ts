import {TableData} from "./types.ts";

export const initialTableData: TableData = {
  headers: [
    { value: '30 января 2024', id: 1 },
    { value: 'Смена 2', id: 2 },
    { value: 'Мастер: Иванов И. И.', id: 3, colspan: 2 },
    { value: 'РПТКМ-120', id: 4 }
  ],
  rows: [
    { cells: [{ id: 5, value: 'Персонал', type: 'text' }, { id: 6, value: '100500 человек', type: 'text', colspan: 3 }, { id: 7, value: 'Комментарий в 3-5 строчек, который тоже можно редактировать.', type: 'text', rowspan: 4 }] },
    { cells: [{ id: 8, value: 'КТП 2000 321', type: 'text', rowspan: 4 }, { id: 9, value: 'Работает', type: 'text' }, { id: 10, value: '24', type: 'number' }, { id: 11, value: 'SPI 3432', type: 'text' }] },
    { cells: [{ id: 12, value: '98.4', type: 'percent' }, { id: 13, value: 'Функционирует, но не бьет', type: 'text', colspan: 2 }] },
  ],
};
