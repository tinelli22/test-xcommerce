import { InitialPaginationProductApi, PaginationProductApi } from "../pages/api/productsApi";

export const getProductsService = async (config: InitialPaginationProductApi) => {
  try {
    const { page, limit, orderSales, search = '' } = config;

    const resp = await fetch("api/productsApi?" + new URLSearchParams(`page=${page}&limit=${limit}&orderSales=${orderSales}&search=${search}`));
    return await resp.json() as PaginationProductApi;

  } catch (err) {
    console.error(err);
    return null
  }
};
