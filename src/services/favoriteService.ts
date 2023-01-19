
import { ConfigPaginationType, PaginationProductApi, ProductModel } from "../types/serverSideTypes";

const favoriteApiUrl = `api/favoritesApi`;

const post = async (obj: ProductModel | {id: string }) => {
  return await fetch(favoriteApiUrl, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(obj),
    method: 'POST'
  })
}

export const getProductsFavoritesService = async (config: ConfigPaginationType) => {
  try {
    const { page, limit, category, search = ''  } = config;

    const resp = await fetch(`${favoriteApiUrl}?` + new URLSearchParams(`page=${page}&limit=${limit}&category=${category}&search=${search}`));
    return await resp.json() as PaginationProductApi;

  } catch (err) {
    console.error(err);
    return null
  }
};

export const toggleFavoriteService = async (id: string) => {
  try {
    

  } catch (err) {
    console.error(err);
    return null
  }
}