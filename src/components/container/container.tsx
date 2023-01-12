
import styles from './container.module.css';

type ContainerType = {
    children: React.ReactNode
}

export default function Container({ children }: ContainerType) {
    return(
        <div className={styles.main}>
           {children}
        </div>
    )
}