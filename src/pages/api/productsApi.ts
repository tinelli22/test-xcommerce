const { orderBy } = require("lodash");
import type { NextApiRequest, NextApiResponse } from "next";
import {
  ProductModel,
} from "../../components/product/product";

export type InitialPaginationProductApi = {
  search?: string;
  page: number;
  limit: number;
  orderSales: boolean;
};

export type PaginationProductApi = {
  data: ProductModel[];
  finalPage: number;
} & InitialPaginationProductApi;

const getId = () => crypto.randomUUID();

const products = [
  {
    id: getId(),
    code: "#MLB2063247364",
    name: "PS1",
    price: 250.88,
    sales: 3,
    stock: 40,
  },
  {
    id: getId(),
    code: "#MLB2063247364",
    name: "PS2",
    price: 599.99,
    sales: 400,
    stock: 0,
  },
  {
    id: getId(),
    code: "#MLB2063247364",
    name: "Mouse gamer",
    price: 250.88,
    sales: 3,
    stock: 40,
  },
  {
    id: getId(),
    code: "#MLB2063247364",
    name: "notebook",
    price: 250.88,
    sales: 3,
    stock: 40,
  },
  {
    id: getId(),
    code: "#MLB2063247364",
    name: "Painel para TV 55 polegadas Intense Lukaliam Off White / Damasco",
    price: 709.88,
    sales: 10,
    stock: 21,
  },
  {
    id: getId(),
    code: "#MLB2063247364",
    name: "Cama Solteiro Casinha Princesa Branco e Rosa - Menina Infantil - Vitamov",
    price: 889.88,
    sales: 14,
    stock: 5,
  },
  {
    id: getId(),
    code: "#MLB2063247364",
    name: "Sofá 3 Lugares Retrátil e Reclinável Cama inBox Compact 1,80m Velusoft Cinza",
    price: 991.45,
    sales: 120,
    stock: 25,
  },
  {
    id: getId(),
    code: "#MLB2063247364",
    name: 'Smartphone Motorola E22 4G 64GB Wi-Fi Tela 6.5" Dual Chip 4GB RAM Câmera Dupla + Selfie 5MP - Preto',
    price: 890.1,
    sales: 504,
    stock: 8,
  },
  {
    id: getId(),
    code: "#MLB2063247364",
    name: "Smartphone Motorola E22 4G 64GB Wi-Fi Tela 6.5 Dual Chip 4GB RAM Câmera Dupla + Selfie 5MP - Azul",
    price: 884.88,
    sales: 36,
    stock: 400,
  },
  {
    id: getId(),
    code: "#MLB2063247364",
    name: "Lavadora de Roupas Electrolux 11Kg LES11 Essencial Care Branca - 110V",
    price: 1850.88,
    sales: 347,
    stock: 447,
  },
  {
    id: getId(),
    code: "#MLB2063247364",
    name: 'Smart TV 43" LG 4K UHD 43UQ7500 Wi-Fi Bluetooth HDR ThinQ AI Google Alexa',
    price: 2199.99,
    sales: 1001,
    stock: 2100,
  },
  {
    id: getId(),
    code: "#MLB2063247364",
    name: 'Smart Tv 43" UHD Samsung 4k 43AU7700 Processador Crystal 4k Tela Sem Limites Alexa Built In Controle Único',
    price: 2089.04,
    sales: 455,
    stock: 78,
  },
  {
    id: getId(),
    code: "#MLB2063247364",
    name: "Computador Completo All In One Intel Core i5 8GB ssd 256GB 19 Mouse e Teclado sem Fio Strong Tech",
    price: 2962.57,
    sales: 47,
    stock: 4,
  },
  {
    id: getId(),
    code: "#MLB2063247364",
    name: "Computador Completo + Kit Gamer Brazil Pc Core I5 650 8gb Ram Ssd 256gb Windows 10",
    price: 1520.88,
    sales: 183,
    stock: 444,
  },
  {
    id: getId(),
    code: "#MLB2063247364",
    name: "Computador Completo Intel Icc 8gb Ssd 120gb Monitor 19",
    price: 1443.88,
    sales: 21,
    stock: 55,
  },
  {
    id: getId(),
    code: "#MLB2063247364",
    name: "Cooktop 4 Bocas Mondial a Gás Glp Preto - Ctg-01",
    price: 438.03,
    sales: 123,
    stock: 320,
  },
  {
    id: getId(),
    code: "#MLB2063247364",
    name: "Cooktop 4 Bocas Chamalux Automático Preto Plus 599 Bivolt",
    price: 303.44,
    sales: 2,
    stock: 125,
  },
  {
    id: getId(),
    code: "#MLB2063247364",
    name: "Escada Aluminio 5 Degraus Uso Doméstico Até 120 kilos Mor",
    price: 188.0,
    sales: 331,
    stock: 255,
  },
  {
    id: getId(),
    code: "#MLB2063247364",
    name: "Panela Wok Multiflon Antiaderente Oriental 28cm - Vermelha",
    price: 44.99,
    sales: 125,
    stock: 2,
  },
  {
    id: getId(),
    code: "#MLB2063247364",
    name: "Jogo de Toalha Banho Catarina 5 Peças Khaki/Marfim - Casa e Conforto By Buddemeyer",
    price: 199.99,
    sales: 4,
    stock: 240,
  },
  {
    id: getId(),
    code: "#MLB2063247364",
    name: "Panela de Pressão Fechamento Externo 4,5L Cereja Panelux",
    price: 139.99,
    sales: 27,
    stock: 22,
  },
  {
    id: getId(),
    code: "#MLB2063247364",
    name: "Livro - Anatomia Orientada para a Clínica",
    price: 601.79,
    sales: 2,
    stock: 110,
  },
  {
    id: getId(),
    code: "#MLB2063247364",
    name: "Carro Elétrico Infantil 12V Branco Mercedes Benz AMG - brink+",
    price: 250.88,
    sales: 3,
    stock: 40,
  },
  {
    id: getId(),
    code: "#MLB2063247364",
    name: "Cadeira de Escritório com Encosto - Office Basics",
    price: 399.99,
    sales: 129,
    stock: 32,
  },
  {
    id: getId(),
    code: "#MLB2063247364",
    name: "Barbie Passeio com Cachorrinho - Mattel",
    price: 89.99,
    sales: 43,
    stock: 12,
  },
  {
    id: getId(),
    code: "#MLB2063247364",
    name: "Chocolate Kitkat White Nestlé - 41,5g",
    price: 3.99,
    sales: 4313,
    stock: 6789,
  },
  {
    id: getId(),
    code: "#MLB2063247364",
    name: "Limao indaia 250ML",
    price: 2.49,
    sales: 311,
    stock: 10,
  },
  {
    id: getId(),
    code: "#MLB2063247364",
    name: `Smartphone Motorola Moto G22 128GB 4G Wi-Fi Tela 6.5'' Dual Chip 4GB RAM Câmera Quádrupla + Selfie 16MP - Azul`,
    price: 1250.1,
    sales: 433,
    stock: 444,
  },
  {
    id: getId(),
    code: "#MLB2063247364",
    name: `Processador de Alimentos Philco Ph900 Turbo Preto 250W - 220v`,
    price: 159.99,
    sales: 35,
    stock: 22,
  },
  {
    id: getId(),
    code: "#MLB2063247364",
    name: `Cafeteira Expresso Oster PrimaLatte 19 Bar Vermelha 110V`,
    price: 999.99,
    sales: 123,
    stock: 10,
  },
  {
    id: getId(),
    code: "#MLB2063247364",
    name: `Panela de Arroz Elétrica 3L Preto + Inox Fun Kitchen - 110v`,
    price: 169.99,
    sales: 213,
    stock: 240,
  },
  {
    id: getId(),
    code: "#MLB2063247364",
    name: `Lavadora De Alta Pressão Kärcher K3 Turbo Auto - 220v`,
    price: 719.9,
    sales: 31,
    stock: 4,
  },
  {
    id: getId(),
    code: "#MLB2063247364",
    name: `Lavadora De Alta Pressão 90 Bar 127V 50/60Hz Wap Premier`,
    price: 1054.4,
    sales: 3,
    stock: 40,
  },
  {
    id: getId(),
    code: "#MLB2063247364",
    name: `Gift Card Digital Razer Gold R$ 50,00`,
    price: 50.0,
    sales: 113,
    stock: 10,
  },
  {
    id: getId(),
    code: "#MLB2063247364",
    name: `Conjunto de Potes Herméticos para Cozinha com Tampa 10 Peças - Electrolux`,
    price: 109.99,
    sales: 321,
    stock: 111,
  },
  {
    id: getId(),
    code: "#MLB2063247364",
    name: `Livro - Demon Slayer - Kimetsu No Yaiba Vol. 1`,
    price: 22.99,
    sales: 343,
    stock: 431,
  },
  {
    id: getId(),
    code: "#MLB2063247364",
    name: `Notebook Asus Intel Core i5-1035G1 8GB (Geforce MX130 2GB) 256GB SSD W10 15,6'' Cinza X515JF-EJ153T`,
    price: 3752.99,
    sales: 3,
    stock: 40,
  },
  {
    id: getId(),
    code: "#MLB2063247364",
    name: `Notebook Samsung NP550XDA-KV3BR Intel Core i3-1115G4 4GB 256GB SSD Tela 15,6" Windows 11 - Cinza Chumbo`,
    price: 2373.09,
    sales: 5,
    stock: 4,
  },
  {
    id: getId(),
    code: "#MLB2063247364",
    name: `Aparador de Pelos Multigroom com 6 Acessórios MG3712 - Philips`,
    price: 114.98,
    sales: 1,
    stock: 4,
  },
  {
    id: getId(),
    code: "#MLB2063247364",
    name: `Aparador de Pelos Philips Multigroom 8 em 1 MG3730/15`,
    price: 165.86,
    sales: 188,
    stock: 10,
  },
] as ProductModel[];

function getRequestMethod(req: NextApiRequest, res: NextApiResponse) {

  const page = parseInt(req.query.page as string);
  const limit = parseInt(req.query.limit as string) || 5;
  const orderSales = Boolean(req.query.orderSales);
  const search = req.query.search as string;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  let result = products;

  if (orderSales && page == 1) {
    result = orderBy(products, "sales", "desc");
  }

  if (search.length > 1) {
    result = result.filter((p) =>
      p.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );
  }

  const finalPage = Math.floor(result.length / limit);

  result = result.slice(startIndex, endIndex);

  const pagination: PaginationProductApi = {
    page,
    search,
    orderSales,
    data: result,
    limit,
    finalPage,
  };

  res.status(200).json(pagination);
}

function postRequestMethod(req: NextApiRequest, res: NextApiResponse) {

  const id = getId();
  const newProd = req.body as ProductModel;
  newProd.id = id;
  products.push(newProd)

  res.status(201).json("Cadastrado com sucesso");
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const method = req.method?.toLowerCase()
  
  if (method == "get") {
    getRequestMethod(req, res);
  } else if(method == "post" && req.body) {
    postRequestMethod(req, res)
  }
}
