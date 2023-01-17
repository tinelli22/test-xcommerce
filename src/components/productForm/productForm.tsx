import classNames from "classnames";
import { useForm } from "react-hook-form";
import { ProductModel } from "../product/product";
import { yupResolver } from '@hookform/resolvers/yup';

import styles from "./productForm.module.css";
import schemaProductForm from "./validationForm";

interface ProductFormModel {
  onSubmit: (data: ProductModel) => void;
}

function ProductForm({ onSubmit }: ProductFormModel) {
  
  const patternCode = "#MLB";
  const { register, reset, handleSubmit, formState: { errors, isSubmitting } } = useForm<ProductModel>({
    resolver: yupResolver(schemaProductForm)
  })
  
  const submitForm = (data: ProductModel) => {
   try {
      onSubmit(data);
      reset();
   } catch (err) {
    console.error(err);
   }
  }
  

  return (
    <form onSubmit={handleSubmit(submitForm)} className={styles.wrapperProductForm}>
      <label className={errors.name && 'error'} htmlFor="name">
        Nome:
        <input type="text" {...register("name")} className={errors.name && 'error'} />
        {errors.name && <p className={styles.messageInputForm}>{errors.name.message}</p>}
      </label>
      <label htmlFor="code" className={errors.code && 'error'}>
        Código:
        <div className={classNames(styles.wrapperCode)}>
          <span>{patternCode}</span>
          <input
           {...register("code")}
            className={classNames(styles.number, errors.code && 'error' )}
            type="number"
            name="code"
          />
        </div>
        {errors.code && <p className={styles.messageInputForm}>{errors.code.message}</p>}
      </label>
      <label className={classNames(styles.wrapperPrice, errors.price && 'error')} htmlFor="price">
        Preço:
        <input
         {...register("price")}
          className={classNames(styles.number, errors.price && 'error')}
          type="number"
        />
         {errors.price && <p className={styles.messageInputForm}>{errors.price.message}</p>}
      </label>
      <div className={styles.labels}>
        <label htmlFor="sales" className={classNames(errors.sales && 'error')}>
          Vendas:
          <input
            {...register("sales")}
            className={classNames(styles.number, errors.sales && 'error')}
            type="number"
          />
          {errors.sales && <p className={styles.messageInputForm}>{errors.sales.message}</p>}
        </label>
        <label htmlFor="stock" className={classNames(errors.stock && 'error')}>
          Estoque:
          <input
           {...register("stock")}
            className={classNames(styles.number, errors.stock && 'error')}
            type="number"
          />
           {errors.stock && <p className={styles.messageInputForm}>{errors.stock.message}</p>}
        </label>
      </div>
      <button className={styles.buttonSubmit} type="submit" disabled={isSubmitting}>
        Adicionar
      </button>
    </form>
  );
}

export default ProductForm;
