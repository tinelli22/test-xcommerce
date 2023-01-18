
export interface ProductModel {
  id: string;
  name: string;
  code: string;
  sales: number;
  price: number;
  stock: number;
}

export type CategoryProduct = 'common' | 'sales'

export interface ProductFavoriteModel extends ProductModel {
  favorite: boolean
}

export type FrontendRequestPages = '' | 'favoritos';

export type ConfigPaginationType = {
  search?: string;
  page: number;
  finalPage?: number;
  limit: number;
  category: CategoryProduct
  frontendPage: FrontendRequestPages
}

export type PaginationProductApi = {
  data: ProductFavoriteModel[];
  config: ConfigPaginationType
};