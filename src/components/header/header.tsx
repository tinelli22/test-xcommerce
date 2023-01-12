import Container from "../container/container";
import Icon from "../icon/icon";
import styles from "./header.module.css";
import Image from "next/image";
import classNames from "classnames";
import Link from "next/link";

import avatar from "../../../public/images/png/avatar.png";
import { useRef } from "react";

export default function Header() {
  const btnAllRef = useRef<HTMLButtonElement>(null);
  const btnFavRef = useRef<HTMLButtonElement>(null);

  return (
    <header className={styles.main}>
      <Container>
        <div className={classNames(styles.row, styles.one)}>
          <Link href="/">
            <div className={styles.logo}>
              xco <span className={styles.plus}>+</span>{" "}
            </div>
          </Link>
          <div className={styles.userInfo}>
            <Image src={avatar} alt="image" />
            <Icon name="chevron-down" />
          </div>
        </div>
      </Container>
      <span className={styles.line}></span>
      <Container>
        <div className={classNames(styles.row, styles.two)}>
          <h3 className={styles.title}>Produtos</h3>

          <label htmlFor="search" className={styles.inputSearch}>
            <Icon name="search" />
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Buscar por produto"
            />
          </label>
        </div>
      </Container>
      <span className={styles.line}></span>
      <Container>
        <div className={classNames(styles.row, styles.buttons)}>
          <div>
            <button ref={btnAllRef} className={styles.button}>
              Todos
            </button>
            <button ref={btnFavRef} className={styles.button}>
              Favoritos
            </button>
          </div>
          <button className={styles.button}>Criar novo</button>
        </div>
      </Container>
    </header>
  );
}
