const { orderBy } = require("lodash");
import type { NextApiRequest, NextApiResponse } from "next";

import {
  CategoryProduct,
  PaginationProductApi,
  ProductFavoriteModel,
  ProductModel,
} from "../../types/serverSideTypes";
import { prodFunctionsDB } from "./dbApi";



function getRequestMethod(req: NextApiRequest, res: NextApiResponse) {
  const page = parseInt(req.query.page as string);
  const limit = parseInt(req.query.limit as string) || 5;

  const category = req.query.category as CategoryProduct;
  const search = req.query.search as string;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  let result = (prodFunctionsDB.mapProducts());

  if (category == "sales") {
    result = orderBy(result, "sales", "desc");
  }

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
      finalPage,
    },
    data: result,
  };

  res.status(200).json(pagination);
}

function createProductRequestMethod(req: NextApiRequest, res: NextApiResponse) {
  const id = prodFunctionsDB.getId();
  const newProd = req.body as ProductModel;
  newProd.id = id;
  prodFunctionsDB.setProduct(newProd);

  res.status(201).json("Cadastrado com sucesso");
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const method = req.method?.toLowerCase();

  if (method == "get") {
    getRequestMethod(req, res);
  } else if (method == "post") {
    createProductRequestMethod(req, res);
  }
}
