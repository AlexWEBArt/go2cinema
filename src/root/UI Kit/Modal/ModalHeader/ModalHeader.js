

export default function ModalHeader({titleModal}) {

    const handelRemoveModal = (e) => {
        e.target.closest('.popup').classList.remove('active')
    }

    return (
        <div className="popup__header">
            <h2 className="popup__title">
                {titleModal}
                <div className="popup__dismiss" onClick={handelRemoveModal}><img src={require("../../../../assets/close.png")} alt="Закрыть"/></div>
            </h2>
        </div>
    )
}