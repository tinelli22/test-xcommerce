import { forwardRef } from "react";

import LayoutTypes from "../../types/LayoutType";
import Product, { ProductModelLayout } from "../product/product";
import Table from "../table/table";

import styles from "./productsPagination.module.css";
import stylesProductComponent from "../product/product.module.css";
import classNames from "classnames";

interface ProductsPaginationModel {
  page: number;
  finalPage: number;
  layout: LayoutTypes;
  title: string;
  products: ProductModelLayout[];
  onPrev: () => void;
  onNext: () => void;
}

type MessagesLoadingTable =
  | "Carregando dados..."
  | "Ops.. Erro ao recuperar dados!";

export type ProductsPaginationFunctions = {};

const ProductsPagination = forwardRef<
  ProductsPaginationFunctions,
  ProductsPaginationModel
>((props, ref) => {
  const { layout, title, products, page, finalPage, onNext, onPrev } = props;

  const onNextPag = () => {
    onNext();
  };

  const onPrevPag = () => {
    onPrev();
  };

  return (
    <>
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
          {products.map((prod, index) => {
            return <Product {...prod} key={index} />;
          })}
        </Table>
        <p className="alignTextPaginationRight">
          Página {page} de {finalPage}
        </p>
      </div>
    </>
  );
});

export default ProductsPagination;
