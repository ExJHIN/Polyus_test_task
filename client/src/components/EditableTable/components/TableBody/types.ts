export interface TableBodyProps {
  rows: { cells: { id: number; value: string; type: 'text' | 'number' | 'percent'; colspan?: number; rowspan?: number }[] }[];
  handleEdit: (id: number, value: string) => void;
}
