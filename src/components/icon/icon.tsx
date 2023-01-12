
import { IconNamesTypes } from './IconNamesType';
import styles from './icon.module.css';
import { HTMLAttributes } from 'react';

interface IconModel extends HTMLAttributes<HTMLElement> {
    name: IconNamesTypes
}

export default function Icon({ name, ...rest }: IconModel) {
    return(
        <i {...rest} className={styles[name]}></i>
    )
}