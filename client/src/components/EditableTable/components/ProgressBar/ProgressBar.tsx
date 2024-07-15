import styles from './ProgressBar.module.scss';
import {ProgressBarProps} from "./types.ts";

export function ProgressBar({ countdown }: ProgressBarProps) {
  return (
    <div className={styles.countdownContainer}>
      <progress
        className={`${styles.countdownProgress} ${countdown === null ? styles.hidden : ''}`}
        value={countdown !== null ? 10 - countdown : 0}
        max="10"
      />
      <span className={`${styles.countdownText} ${countdown === null ? styles.hidden : ''}`}>
        {countdown} секунд до отправки данных
      </span>
    </div>
  );
}
