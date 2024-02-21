

export default function ModalHeader({titleModal, handleRemoveModal}) {

    return (
        <div className="popup__header">
            <h2 className="popup__title">
                {titleModal}
                <div className="popup__dismiss" onClick={handleRemoveModal}><img src={require("../../../../assets/close.png")} alt="Закрыть"/></div>
            </h2>
        </div>
    )
}