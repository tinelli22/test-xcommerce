
import { ConfigPaginationType, PaginationProductApi, ProductModel } from "../types/serverSideTypes";

const url = `api/productsApi`;

export const getProductsService = async (config: ConfigPaginationType) => {
  try {
    const { page, limit, category, search = '', frontendPage  } = config;

    const resp = await fetch(`${url}?` + new URLSearchParams(`page=${page}&limit=${limit}&category=${category}&search=${search}&frontendPage=${frontendPage}`));
    return await resp.json() as PaginationProductApi;

  } catch (err) {
    console.error(err);
    return null
  }
};

export const saveProductService = async (prod: ProductModel) => {
  try {
    
    return await fetch(url, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(prod),
      method: 'POST'
    })
  } catch (err) {
    console.error(err);
    return null
  }
}