import styles from "./layout.module.css";

import Container from "../container/container";
import Header from "../header/header";
import Modal from "../modal/modal";
import ProductsPagination from "../productsPagination/productsPagination";
import { useEffect, useState } from "react";
import { ConfigPaginationType, PaginationProductApi } from "../../types/serverSideTypes";
import { getProductsService } from "../../services/productService";

type LayoutType = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutType) {
  const initialConfig: ConfigPaginationType = {
    category: 'sales',
    limit: 6,
    page: 1
  }

  const [data, setData] = useState<PaginationProductApi>({
    config: initialConfig,
    data: []
  });

  const fetchData = async (config: ConfigPaginationType) => {
    try {
      const resp = await getProductsService(config, 'columns')
      if(!resp) throw Error('Erro ao recuperar dados');

      setData(resp)
    } catch (err) {
      console.error(err);
    }
  }

  const onNext = async () => {
    const { config } = data
    const next = config.page + 1;

    if (next > config.finalPage!) return;

    fetchData({
      ...config,
      page: next
    })
  }

  const onPrev = async () => {
    const { config } = data
    const next = config.page - 1;
    if (next > config.page || next <= 0) return;

    fetchData({
      ...config,
      page: next
    })
  }

  useEffect(() => {
    fetchData(initialConfig)
  }, []);

  return (
    <>
      <Header />
      <main>
        <Container>
          <div className={styles.wrapperContent}>
            {data && (
              <ProductsPagination
                title="Mais Vendidos"
                layout="columns"
                onNext={onNext}
                onPrev={onPrev}
                page={data.config.page}
                finalPage={data.config.finalPage!}
                products={data.data}
              />
            )}
            {children}
          </div>
        </Container>
      </main>
      <Modal />
    </>
  );
}
