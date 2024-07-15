import {EditableTable} from "../../components/EditableTable";
import styles from './Home.module.scss';

export function Home() {
  return (
    <main className={styles.container}>
      <section className={styles.tableWrapper}>
        <EditableTable/>
      </section>
    </main>
);
}
