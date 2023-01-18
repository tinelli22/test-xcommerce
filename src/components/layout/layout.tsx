import styles from "./layout.module.css";

import Container from "../container/container";
import Header from "../header/header";
import Modal from "../modal/modal";
import ProductsPagination from "../productsPagination/productsPagination";

type LayoutType = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutType) {
  
  return (
    <>
      <Header />
      <main>
        <Container>
          <div className={styles.wrapperContent}>
            <ProductsPagination title="Mais Vendidos" config={{limit: 6, category: 'sales', page: 1, frontendPage: ''}} layout="columns" />
            {children}
          </div>
        </Container>
      </main>
      <Modal />
    </>
  );
}
