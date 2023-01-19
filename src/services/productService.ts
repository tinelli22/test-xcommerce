
import { ProductModelLayout } from "../components/product/product";
import LayoutTypes from "../types/LayoutType";
import { ConfigPaginationType, PaginationProductApi, ProductModel } from "../types/serverSideTypes";

const productApiUrl = `api/productsApi`;

const post = async (obj: ProductModel | {id: string }) => {
  return await fetch(productApiUrl, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(obj),
    method: 'POST'
  })
}

export const getProductsService = async (config: ConfigPaginationType, layout: LayoutTypes) => {
  try {
    const { page, limit, category, search = '',  } = config;

    const resp = (await (await fetch(`${productApiUrl}?` + new URLSearchParams(`page=${page}&limit=${limit}&category=${category}&search=${search}`))).json()) as PaginationProductApi;
    const { data } = resp;
    
    return {
      ...resp,
      data: data.map((p) => {
        return {
          ...p,
          layout,
        } as ProductModelLayout;
      })
    }

  } catch (err) {
    console.error(err);
    return null
  }
};

export const saveProductService = async (prod: ProductModel) => {
  try {
    
    return await post(prod);
  } catch (err) {
    console.error(err);
    return null
  }
}