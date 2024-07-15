import { useTable } from '../../hooks/useTable';
import styles from './EditableTable.module.scss';
import {ProgressBar} from "./components/ProgressBar";
import {TableHeader} from "./components/TableHeader";
import {TableBody} from "./components/TableBody";

export function EditableTable() {
  const { dataTable, handleEdit, countdown } = useTable();

  return (
    <div className={styles.tableContainer}>
      <table className={styles.editableTable}>
        <TableHeader headers={dataTable.headers} handleEdit={handleEdit}/>
        <TableBody rows={dataTable.rows} handleEdit={handleEdit}/>
      </table>
      <ProgressBar countdown={countdown}/>
    </div>
  );
}
