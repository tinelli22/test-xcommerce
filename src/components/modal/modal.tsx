import {  useContext, useEffect, useRef } from 'react';
import { store } from '../../store/store';


const Modal = () => {
    const { state: { modal } } = useContext(store);
    const modalRef = useRef<HTMLDivElement>(null);
    

    useEffect(() => {
        if(modal) {
            modalRef.current?.classList.toggle('open')
        } else onClose()
        
    }, [modal]);

    const onClose = () => {
        modalRef.current?.classList.remove("open")
    }

    return(
        <div ref={modalRef} className={"modal-wrapper"}>
        <div className={"modal-background"} onClick={onClose}></div>
        <div className={"modal-content"}>
            <div className={"modal-row"}>
                {modal && <h4 className={"modal-title"}>{modal.title}</h4>}
                <div className={"modal-close"} onClick={onClose}>X</div>
            </div>
            <div>
                {
                   modal?.content()
                }
            </div>
        </div>
    </div>
    )   
}

export default Modal