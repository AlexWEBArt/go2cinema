import { useEffect } from "react";
import ModalHeader from "./ModalHeader/ModalHeader"
import ReactDOM from 'react-dom';

export default function Modal({ title, form, handleRemoveModal }) {
    // if (!title && !form) return null

    const modalRoot = document.getElementById('root'); 
    const modalContainer = document.createElement('div'); 
    modalContainer.classList.add('popup')

    useEffect(() => {
        modalRoot.prepend(modalContainer); 

        return () => {
            modalRoot.removeChild(modalContainer); 
        };
    }, [modalContainer, modalRoot]);


    return (
        <>
            {
                ReactDOM.createPortal(
                    (<div className="popup__container">
                        <div className="popup__content">
                            <ModalHeader titleModal={title} handleRemoveModal={handleRemoveModal}/>
                            <div className="popup__wrapper">
                                {form}
                            </div>
                        </div>
                    </div>),
                    modalContainer
                )}
        </>
    )
}