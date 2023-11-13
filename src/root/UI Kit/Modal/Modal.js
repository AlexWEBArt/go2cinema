import ModalHeader from "./ModalHeader/ModalHeader"

export default function Modal({title, form}) {
    // if (!title && !form) return null


    return (
        <div className="popup">
            <div className="popup__container">
                <div className="popup__content">
                    <ModalHeader titleModal={title}/>
                    <div className="popup__wrapper">
                        {form}
                    </div>
                </div>
            </div>
        </div>
    )
}