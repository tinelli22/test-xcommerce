import classNames from "classnames";
import Icon from "../icon/icon";
import styles from "./table.module.css";

interface TableModel {
  title: string;
  children: React.ReactNode;
  onPrev: () => void;
  onNext: () => void;
  layout?: 'columns' | 'line'
}

export default function Table({ title, children, layout = 'line' ,onPrev, onNext }: TableModel) {
  return (
    <div className={styles.main}>
      <div className={styles.row}>
        <h4 className={styles.title}>{title}</h4>

        <div className={styles.icons}>
          <Icon name="arrow-left" onClick={() => onPrev()} />
          <Icon name="arrow-right" onClick={() => onNext()} />
        </div>
      </div>
      <div className={classNames(styles.table, styles[layout])}>{children}</div>
    </div>
  );
}
