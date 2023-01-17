import { ProductModel } from "../components/product/product";
import { InitialPaginationProductApi, PaginationProductApi } from "../pages/api/productsApi";

const url = `api/productsApi`;

export const getProductsService = async (config: InitialPaginationProductApi) => {
  try {
    const { page, limit, orderSales, search = '' } = config;

    const resp = await fetch(`${url}?` + new URLSearchParams(`page=${page}&limit=${limit}&orderSales=${orderSales}&search=${search}`));
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