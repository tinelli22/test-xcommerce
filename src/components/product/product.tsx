import styles from "./product.module.css";

import LayoutTypes from "../../types/LayoutType";
import { IconNames } from '../../types/IconNamesType';

import Image from "next/image";
import Icon from "../icon/icon";
import classNames from "classnames";
import { useState } from "react";

import prodImg from "../../../public/images/png/productImage.png";

interface ProductModel {
  name: string;
  code: string;
  sales: number;
  price: number;
  stock: number;
  layout?: LayoutTypes;
}

export default function Product({
  layout = "line",
  name,
  code,
  sales,
  price,
  stock,
}: ProductModel) {

  const { heart, heartFilled } = IconNames;
  
  const [icon, setIcon] = useState<typeof heart | typeof heartFilled>('heart');

  const customName = () => {
    let n = name;
    if (layout == "line") return n;

    if (n.length > 22) {
      n = n.substring(0, 22).concat(" (...)");
    }

    return n;
  };

  const onClickFav = () => {
    console.log(icon);
    
    setIcon(icon == 'heart' ? 'heart-filled' : 'heart');
  }

  return (
    <div className={classNames(styles["main"], styles[layout])}>
      <Image src={prodImg} alt="image" className={styles["img"]} />
      <div className={styles["col-1"]}>
        <p id="name" className={classNames(styles["name"], styles["text"])}>
          {customName()}
        </p>
        <p className={classNames(styles["text"], styles["code"])}>
          {code}
        </p>
      </div>
      <div className={styles["col-2"]}>
        <p className={classNames(styles["text"])} id="price">
          {price.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
        <div>
          <p className={classNames(styles["text"], styles["total"])}>
            Total de {Math.floor(sales * price)}
          </p>
          <p id="sales" className={classNames(styles["text"], styles["light"])}>
            {sales} vendas
          </p>
        </div>
      </div>
      <div className={styles["col-3"]}>
        <p id="stock" className={classNames(styles["text"], styles["light"])}>
          {stock} und
        </p>
        <div className={classNames(styles["icon"], styles[icon])}>
          <Icon name={icon} onClick={onClickFav} />
        </div>
      </div>
    </div>
  );
}
