import { ProductModelLayout } from "../components/product/product";
import LayoutTypes from "../types/LayoutType";
import { ConfigPaginationType, PaginationProductApi } from "../types/serverSideTypes";

const favoriteApiUrl = `api/favoritesApi`;

export const getFavoritesService = async (config: ConfigPaginationType, layout: LayoutTypes) => {
  try {
    const { page, limit, category, search = ''  } = config;

    const resp = (await (await fetch(`${favoriteApiUrl}?` + new URLSearchParams(`page=${page}&limit=${limit}&category=${category}&search=${search}`))).json()) as PaginationProductApi;
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

export const toggleFavoriteService = async (id: number) => {
  try {
    const resp = await fetch(favoriteApiUrl, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
      method: "POST",
    });

    const json = await resp.json();

    if (resp.status == 400) throw Error(json);

    return json;
  } catch (err) {
    console.error(err);
  }
};
