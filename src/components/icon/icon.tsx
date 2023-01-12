
import { IconNamesTypes } from './IconNamesType';
import styles from './icon.module.css';

type IconTypes = {
    name: IconNamesTypes
}

export default function Icon({ name }: IconTypes) {
    return(
        <i className={styles[name]}></i>
    )
}