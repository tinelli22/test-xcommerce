import * as yup from "yup";

const requiredMessage = `Campo obrigatório`;
const minMessage = (msg: number) => `Mínimo ${msg} caracteres`;
const positiveMessage = `Somente valor positivo`;

const schemaProductForm = yup.object({
    name: yup.string().required(requiredMessage).min(3, minMessage(3)),
    code: yup.string().required(requiredMessage),
    
    price: yup.number().required(requiredMessage)
    .moreThan(2.99, 'Mínimo valor é R$ 2,99')
    .default(2.99)
    .typeError(requiredMessage),
    sales: yup.number().required(requiredMessage).min(0).default(0).typeError(requiredMessage),
    stock: yup.number().required(requiredMessage).min(0).default(0).typeError(requiredMessage),
})

export default schemaProductForm