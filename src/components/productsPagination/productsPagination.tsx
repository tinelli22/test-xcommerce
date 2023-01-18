import { forwardRef, useEffect, useImperativeHandle, useState } from "react";

import { getProductsService } from "../../services/productService";
import LayoutTypes from "../../types/LayoutType";
import Product, { ProductModelLayout } from "../product/product";
import Table from "../table/table";

import styles from "./productsPagination.module.css";
import stylesProductComponent from "../product/product.module.css";
import classNames from "classnames";
import {
  ConfigPaginationType,
  PaginationProductApi,
} from "../../types/serverSideTypes";

interface ProductsPaginationModel {
  config: ConfigPaginationType;
  layout: LayoutTypes;
  title: string;
}

type MessagesLoadingTable =
  | "Carregando dados..."
  | "Ops.. Erro ao recuperar dados!";

export type ProductsPaginationFunctions = {
  fetchDataWithSearch: (con: ConfigPaginationType) => void;
};

const ProductsPagination = forwardRef<
  ProductsPaginationFunctions,
  ProductsPaginationModel
>((props, ref) => {
  const { config, layout, title } = props;

  useImperativeHandle(ref, () => ({
    fetchDataWithSearch(con) {
      fetchData(con);
    },
  }));

  const [data, setData] = useState<PaginationProductApi | null>(null);
  const [message, setMessage] = useState<MessagesLoadingTable>(
    "Carregando dados..."
  );

  const fetchData = async (conf: ConfigPaginationType) => {

    let resp = await getProductsService(conf);
    
    if (!resp) setMessage("Ops.. Erro ao recuperar dados!");
    else {
      const mappData = resp!.data.map((p) => {
        return {
          ...p,
          layout,
        } as ProductModelLayout;
      });

      resp!.data = mappData;

      setData(resp);
    }
  };

  useEffect(() => {
    fetchData(config);
  }, []);

  const onNextPag = () => {
    if (!data) return;

    const next = data.config.page + 1;
    if (next > data.config.finalPage!) return;

    fetchData({
      ...config,
      limit: data.config.limit,
      page: next,
    });
  };

  const onPrevPag = () => {
    if (!data) return;

    const next = data.config.page - 1;
    if (next > data.config.page || next <= 0) return;

    fetchData({
      ...config,
      limit: data.config.limit,
      page: next,
    });
  };

  return (
    <>
      {data ? (
        <div>
          <Table
            layout={layout}
            title={title}
            onNext={onNextPag}
            onPrev={onPrevPag}
          >
            {layout === "line" && (
              <div className={styles.header}>
                <p
                  style={{ textTransform: "uppercase" }}
                  className={stylesProductComponent.text}
                >
                  identificação
                </p>
                <p></p>
                <div className={stylesProductComponent["col-2"]}>
                  <p
                    style={{ textTransform: "uppercase" }}
                    className={stylesProductComponent.text}
                  >
                    preço
                  </p>
                  <p
                    style={{ textTransform: "uppercase" }}
                    className={stylesProductComponent.text}
                  >
                    vendas
                  </p>
                </div>
                <p
                  style={{ textTransform: "uppercase" }}
                  className={classNames(
                    stylesProductComponent.text,
                    stylesProductComponent["col-3"]
                  )}
                >
                  estoque
                </p>
              </div>
            )}
            {data.data.map((prod, index) => {
              return <Product {...prod} key={index} />;
            })}
          </Table>
          <p className="alignTextPaginationRight">
            Página {data.config.page} de {data.config.finalPage}
          </p>
        </div>
      ) : (
        <p>{message}</p>
      )}
    </>
  );
});

export default ProductsPagination;
