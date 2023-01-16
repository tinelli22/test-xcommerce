import { useEffect, useState } from "react";
import {
  InitialPaginationProductApi,
  PaginationProductApi,
} from "../../pages/api/productsApi";
import { getProductsService } from "../../services/productService";
import styles from "./layout.module.css";

import Container from "../container/container";
import Header from "../header/header";
import Modal from "../modal/modal";
import Products from "../products/products";
import Table from "../table/table";
import { ProductModelLayout } from "../product/product";

type LayoutType = {
  children: React.ReactNode;
};

type aux = Omit<PaginationProductApi, "data">;
type CustomPaginationProductApi = {
  data: ProductModelLayout[];
} & aux;

type Messages = "Carregando dados..." | "Ops.. Erro ao recuperar dados!";

export default function Layout({ children }: LayoutType) {
  const [data, setData] = useState<CustomPaginationProductApi | null>(null);
  const [message, setMessage] = useState<Messages>("Carregando dados...");

  const fetchData = async (config?: InitialPaginationProductApi) => {
    let conf = config;

    if (!conf) {
      conf = {
        page: 1,
        limit: 6,
        orderSales: true,
      };
    }

    let resp = await getProductsService(conf);
    if (!resp) setMessage("Ops.. Erro ao recuperar dados!");
    else {
      const mappData = resp!.data.map((p) => {
        return {
          ...p,
          layout: "columns",
        } as ProductModelLayout;
      });

      resp!.data = mappData;

      setData(resp);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onNextPag = () => {
    if (!data) return;

    const next = data.page + 1;
    if (next > data.finalPage) return;

    fetchData({
      limit: data.limit,
      page: next,
      orderSales: true,
    });
  };

  const onPrevPag = () => {};

  return (
    <>
      <Header />
      <main>
        <Container>
          <div className={styles.wrapperContent}>
            {data ? (
              <div className={styles.wrapperTable}>
                <Table
                  layout="columns"
                  title="Mais Vendidos"
                  onNext={onNextPag}
                  onPrev={onPrevPag}
                >
                  <Products products={data.data} />
                </Table>
                <p className={styles.alignRight}>
                  Página {data.page} de {data.finalPage}
                </p>
              </div>
            ) : (
              <p>{message}</p>
            )}
            {children}
          </div>
        </Container>
      </main>
      <Modal />
    </>
  );
}
