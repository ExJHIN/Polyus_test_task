export interface TableRow {
  id: number;
  value: string;
  type: 'text' | 'number' | 'percent';
  colspan?: number;
  rowspan?: number;
}

export interface TableData {
  headers: { value: string; id: number; colspan?: number; rowspan?: number }[];
  rows: { cells: TableRow[] }[];
}
