import type { NextApiRequest, NextApiResponse } from "next";

import {
  CategoryProduct,
  PaginationProductApi,
} from "../../types/serverSideTypes";
import { favFunctionsDB, prodFunctionsDB } from "./dbApi";

async function getRequestMethod(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const page = parseInt(req.query.page as string);
  const limit = parseInt(req.query.limit as string) || 5;
  
  const category = req.query.category as CategoryProduct
  const search = req.query.search as string;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  let result = prodFunctionsDB.mapProducts()


  if (search.length > 1) {
    result = result.filter((p) =>
      p.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );
  }

  const finalPage = Math.floor(result.length / limit);

  result = result.slice(startIndex, endIndex);

  const pagination: PaginationProductApi = {
    config: {
      page,
      search,
      category,
      limit,
      finalPage
    },
    data: result,
  };

  res.status(200).json(pagination);
}

function toggleFavorite(req: NextApiRequest, res: NextApiResponse) {
  const id = req.body.id as number;
  const prod = prodFunctionsDB.getProduct(id);
  const hasFav = favFunctionsDB.getFavorite(id);
  
  if (!prod) {
    res.status(400).json("Requisição inválida");
  } else {
    let msg = "Adicionado com sucesso";

    if (!hasFav) {
     favFunctionsDB.setFavorite(id);
    } else {
      favFunctionsDB.removeFavorite(id);
      msg = "Removido com sucesso";
    }

    res.status(201).json(msg);
  }
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const method = req.method?.toLowerCase();
  
  if (method == "get") {
    getRequestMethod(req, res);
  } else if (method == "post") {
    toggleFavorite(req, res);
  }
}
