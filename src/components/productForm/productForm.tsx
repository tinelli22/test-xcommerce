import classNames from "classnames";
import { FormEvent, useRef } from "react";
import InputForm, { InputFormTypeMethods } from "./inputform";
import styles from "./productForm.module.css";

interface ProductFormModel {
  onSubmit: () => void;
}

function ProductForm({ onSubmit }: ProductFormModel) {
  const nameRef = useRef<InputFormTypeMethods>(null);
  const priceRef = useRef<InputFormTypeMethods>(null);
  const salesRef = useRef<InputFormTypeMethods>(null);
  const stockRef = useRef<InputFormTypeMethods>(null);
  const patternCode = "#MLB";

  const onChangeName = (ev: FormEvent<HTMLInputElement>) => {
    const value = (ev.target as HTMLInputElement).value;

    if(value.length < 3) nameRef.current?.dispatchMessage('Minimo 3 caracteres');
    else nameRef.current?.removeMessage()
  }

  return (
    <form className={styles.wrapperProductForm}>
      <label htmlFor="name">
        Nome:
        <InputForm type="text" name="name" ref={nameRef} onChange={onChangeName} />
      </label>
      <label htmlFor="code">
        Código:
        <div className={classNames(styles.wrapperCode)}>
          <span>{patternCode}</span>
          <InputForm
            className={styles.number}
            type="number"
            name="code"
          />
        </div>
      </label>
      <label className={styles.wrapperPrice} htmlFor="price">
        Preço:
        <input
          className={classNames(styles.number)}
          type="number"
          name="price"
          id="price"
        />
      </label>
      <div className={styles.labels}>
        <label htmlFor="sales">
          Vendas:
          <input
            name="sales"
            className={classNames(styles.number)}
            type="number"
          />
        </label>
        <label htmlFor="stock">
          Estoque:
          <input
            name="stock"
            className={classNames(styles.number)}
            type="number"
          />
        </label>
      </div>
      <button className={styles.buttonSubmit} type="submit">
        Adicionar
      </button>
    </form>
  );
}

export default ProductForm;
