
import Container from '../container/container';
import Icon from '../icon/icon';
import styles from './header.module.css';
import Image from 'next/image'

import avatar from '../../../public/images/png/avatar.png'
import Link from 'next/link';

export default function Header() {
    return(
        <header className={styles.main}>
            <Container>
                <div className={styles.row}>
                    <Link href="/">
                        <div className={styles.logo}>xco <span className={styles.plus}>+</span> </div>
                    </Link>
                    <div className={styles.userInfo}>
                        <Image src={avatar} alt="image" />
                        <Icon name='chevron-down' />
                    </div>
                </div>
            </Container>
            <span className={styles.line}></span>
        </header>
    )
}