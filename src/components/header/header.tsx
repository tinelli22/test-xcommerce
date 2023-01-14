import Container from "../container/container";
import Icon from "../icon/icon";
import styles from "./header.module.css";
import Image from "next/image";
import classNames from "classnames";
import Link from "next/link";
import { useContext, useEffect, useRef } from "react";

import avatar from "../../../public/images/png/avatar.png";
import { AppContext } from "../../context/context";

export default function Header() {
  const { dispatch } = useContext(AppContext);
  const parentLinksRef = useRef<HTMLDivElement>(null);
  

  //incomplete
  const addSelect = (el?: HTMLAnchorElement) => {
    const path = window.location.pathname;
    const children = parentLinksRef.current!.children;

    
    for (let index = 0; index < children.length; index++) {
      const loopEl = children[index] as HTMLAnchorElement;
      loopEl.classList.remove("nav-selected");

      if(el) { el.classList.add("nav-selected") }
      else {

      }
    }
  }

  useEffect(() => { 
    addSelect()
  }, []);

  const openCreateModal = () => {
    dispatch({type: "ADD_CONTENT", payload: {title: 'blabla', content: () => (<p>im content</p>)}})
  }

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
          <div ref={parentLinksRef}>
            <Link href="/" className={styles.button} onClick={el => addSelect((el.target) as HTMLAnchorElement)}>
              Todos
            </Link>
            <Link href="/favoritos" className={styles.button} onClick={el => addSelect((el.target) as HTMLAnchorElement)}>
              Favoritos
            </Link>
          </div>
          <button className={classNames(styles.button, styles.create)} onClick={openCreateModal}>Criar novo</button>
        </div>
      </Container>
    </header>
  );
}
