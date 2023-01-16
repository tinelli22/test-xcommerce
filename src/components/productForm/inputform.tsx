import { forwardRef, HTMLAttributes, HTMLInputTypeAttribute, useImperativeHandle, useRef } from "react";
import styles from './productForm.module.css';

interface InputFormModel extends HTMLAttributes<HTMLInputElement>{
    name: string;
    type: HTMLInputTypeAttribute
};

export type InputFormTypeMethods = {
  dispatchMessage: (msg: string) => void
  removeMessage: () => void;
};

const InputForm = forwardRef<InputFormTypeMethods, InputFormModel>(
  (props, ref) => {
    const {  name, type, className, onChange } = props;
    const messageRef = useRef<HTMLParagraphElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    
    useImperativeHandle(ref, () => ({
        dispatchMessage(msg: string) {
            messageRef.current?.classList.add('message-error')
            messageRef.current!.innerHTML = msg;
            inputRef.current?.classList.add('error')
        },
        removeMessage() {
            messageRef.current?.classList.remove('message-error')
            inputRef.current?.classList.add('error')
        }
    }));

    return (
      <>
        <input required ref={inputRef} className={className} type={type} name={name} onChange={onChange} />
        <p ref={messageRef} className={styles.messageInputForm}></p>
      </>
    );
  }
);

export default InputForm;
