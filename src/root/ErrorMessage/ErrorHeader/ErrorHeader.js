

export default function ErrorHeader({handleRemoveModal}) {

    return (
        <div className="popup__header">
            <h2 className="popup__title">
                Ошибка
                <div className="popup__dismiss" onClick={handleRemoveModal}>
                    <img src={require("../../../assets/close.png")} alt="Закрыть"/>
                </div>
            </h2>
        </div>
    )
}