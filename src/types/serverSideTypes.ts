import { ProductModelLayout } from "../components/product/product";

export interface ProductModel {
  id: number;
  name: string;
  code: string;
  sales: number;
  price: number;
  stock: number;
}

export type CategoryProduct = 'common' | 'sales'


export type ConfigPaginationType = {
  search?: string;
  page: number;
  finalPage?: number;
  limit: number;
  category: CategoryProduct
}

export type PaginationProductApi = {
  data: ProductModelLayout[];
  config: ConfigPaginationType
};