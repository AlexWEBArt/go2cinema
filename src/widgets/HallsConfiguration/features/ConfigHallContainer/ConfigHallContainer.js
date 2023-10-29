export default function ConfigHallContainer() {

    // взять данные из глобального состояния о количесте рядов
    // row * <div className="conf-step__row"></div>

    // взять данные из глобального состояния о количесте мест в ряде и их типах
    // place(type) * <span className="conf-step__chair ${type}"></span>

    return (
        <div className="conf-step__hall">
            <div className="conf-step__hall-wrapper">
                <div className="conf-step__row">
                    <span className="conf-step__chair conf-step__chair_disabled"></span><span className="conf-step__chair conf-step__chair_disabled"></span>
                    <span className="conf-step__chair conf-step__chair_disabled"></span><span className="conf-step__chair conf-step__chair_standart"></span>
                    <span className="conf-step__chair conf-step__chair_standart"></span><span className="conf-step__chair conf-step__chair_disabled"></span>
                    <span className="conf-step__chair conf-step__chair_disabled"></span><span className="conf-step__chair conf-step__chair_disabled"></span>
                </div>

                <div className="conf-step__row">
                    <span className="conf-step__chair conf-step__chair_disabled"></span><span className="conf-step__chair conf-step__chair_disabled"></span>
                    <span className="conf-step__chair conf-step__chair_standart"></span><span className="conf-step__chair conf-step__chair_standart"></span>
                    <span className="conf-step__chair conf-step__chair_standart"></span><span className="conf-step__chair conf-step__chair_standart"></span>
                    <span className="conf-step__chair conf-step__chair_disabled"></span><span className="conf-step__chair conf-step__chair_disabled"></span>
                </div>

                <div className="conf-step__row">
                    <span className="conf-step__chair conf-step__chair_disabled"></span><span className="conf-step__chair conf-step__chair_standart"></span>
                    <span className="conf-step__chair conf-step__chair_standart"></span><span className="conf-step__chair conf-step__chair_standart"></span>
                    <span className="conf-step__chair conf-step__chair_standart"></span><span className="conf-step__chair conf-step__chair_standart"></span>
                    <span className="conf-step__chair conf-step__chair_standart"></span><span className="conf-step__chair conf-step__chair_disabled"></span>
                </div>

                <div className="conf-step__row">
                    <span className="conf-step__chair conf-step__chair_standart"></span><span className="conf-step__chair conf-step__chair_standart"></span>
                    <span className="conf-step__chair conf-step__chair_standart"></span><span className="conf-step__chair conf-step__chair_vip"></span>
                    <span className="conf-step__chair conf-step__chair_vip"></span><span className="conf-step__chair conf-step__chair_standart"></span>
                    <span className="conf-step__chair conf-step__chair_standart"></span><span className="conf-step__chair conf-step__chair_disabled"></span>
                </div>

                <div className="conf-step__row">
                    <span className="conf-step__chair conf-step__chair_standart"></span><span className="conf-step__chair conf-step__chair_standart"></span>
                    <span className="conf-step__chair conf-step__chair_vip"></span><span className="conf-step__chair conf-step__chair_vip"></span>
                    <span className="conf-step__chair conf-step__chair_vip"></span><span className="conf-step__chair conf-step__chair_vip"></span>
                    <span className="conf-step__chair conf-step__chair_standart"></span><span className="conf-step__chair conf-step__chair_disabled"></span>
                </div>

                <div className="conf-step__row">
                    <span className="conf-step__chair conf-step__chair_standart"></span><span className="conf-step__chair conf-step__chair_standart"></span>
                    <span className="conf-step__chair conf-step__chair_vip"></span><span className="conf-step__chair conf-step__chair_vip"></span>
                    <span className="conf-step__chair conf-step__chair_vip"></span><span className="conf-step__chair conf-step__chair_vip"></span>
                    <span className="conf-step__chair conf-step__chair_standart"></span><span className="conf-step__chair conf-step__chair_disabled"></span>
                </div>

                <div className="conf-step__row">
                    <span className="conf-step__chair conf-step__chair_standart"></span><span className="conf-step__chair conf-step__chair_standart"></span>
                    <span className="conf-step__chair conf-step__chair_vip"></span><span className="conf-step__chair conf-step__chair_vip"></span>
                    <span className="conf-step__chair conf-step__chair_vip"></span><span className="conf-step__chair conf-step__chair_vip"></span>
                    <span className="conf-step__chair conf-step__chair_standart"></span><span className="conf-step__chair conf-step__chair_disabled"></span>
                </div>

                <div className="conf-step__row">
                    <span className="conf-step__chair conf-step__chair_standart"></span><span className="conf-step__chair conf-step__chair_standart"></span>
                    <span className="conf-step__chair conf-step__chair_standart"></span><span className="conf-step__chair conf-step__chair_standart"></span>
                    <span className="conf-step__chair conf-step__chair_standart"></span><span className="conf-step__chair conf-step__chair_standart"></span>
                    <span className="conf-step__chair conf-step__chair_standart"></span><span className="conf-step__chair conf-step__chair_disabled"></span>
                </div>

                <div className="conf-step__row">
                    <span className="conf-step__chair conf-step__chair_standart"></span><span className="conf-step__chair conf-step__chair_standart"></span>
                    <span className="conf-step__chair conf-step__chair_standart"></span><span className="conf-step__chair conf-step__chair_standart"></span>
                    <span className="conf-step__chair conf-step__chair_standart"></span><span className="conf-step__chair conf-step__chair_standart"></span>
                    <span className="conf-step__chair conf-step__chair_standart"></span><span className="conf-step__chair conf-step__chair_standart"></span>
                </div>

                <div className="conf-step__row">
                    <span className="conf-step__chair conf-step__chair_standart"></span><span className="conf-step__chair conf-step__chair_standart"></span>
                    <span className="conf-step__chair conf-step__chair_standart"></span><span className="conf-step__chair conf-step__chair_standart"></span>
                    <span className="conf-step__chair conf-step__chair_standart"></span><span className="conf-step__chair conf-step__chair_standart"></span>
                    <span className="conf-step__chair conf-step__chair_standart"></span><span className="conf-step__chair conf-step__chair_standart"></span>
                </div>
            </div>
        </div>
    )
}