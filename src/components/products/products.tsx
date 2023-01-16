import LayoutTypes from "../../types/LayoutType";
import Product, { ProductModelLayout } from "../product/product";

interface ProductsModel {
  products: ProductModelLayout[];
}

export default function Products({ products }: ProductsModel) {
  return (
    <>
      {products.map((prod, index) => {
        return (
          <li key={index}>
            <Product {...prod} />
          </li>
        );
      })}
    </>
  );
}
