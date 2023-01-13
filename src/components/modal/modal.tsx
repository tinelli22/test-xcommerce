import { forwardRef, HTMLAttributes, useImperativeHandle, useRef } from 'react';

interface ModalModel extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
    title: string
}

export type ModalFunctions = {
    toggle: () => void
}

const Modal = forwardRef<ModalFunctions, ModalModel>((props, ref) => {
    const { title, children, ...rest } = props;
    const modalRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(ref, () => ({
        
        toggle() {
            modalRef.current?.classList.toggle("open")
        },
    }));

    const onClose = () => {
        modalRef.current?.classList.remove("open")
    }

    return(
        <div ref={modalRef} className={"modal-wrapper"}>
        <div className={"modal-background"} onClick={onClose}></div>
        <div className={"modal-content"}>
            <div className={"modal-row"}>
                <h4 className={"modal-title"}>{title}</h4>
                <div className={"modal-close"} onClick={onClose}>X</div>
            </div>
            <div>
                {children}
            </div>
        </div>
    </div>
    )   
});

export default Modal