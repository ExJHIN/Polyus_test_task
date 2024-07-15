export interface TableHeaderProps {
  headers: { value: string; id: number; colspan?: number; rowspan?: number }[];
  handleEdit: (id: number, value: string, isHeader?: boolean) => void;
}
