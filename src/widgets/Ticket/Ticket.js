import GetCode from './features/GetCode/GetCode'
import Hint from './features/Hint/Hint'
import TicketDiscription from './features/TicketDiscription/TicketDiscription'
import TicketTitle from './features/TicketTitle/TicketTitle'
import ImageQR from './features/ImageQR/ImageQR'
import { Link } from 'react-router-dom'

export default function Ticket({ from, selectedSession, selectedPlaces, setRequestData }) {
    const title = from === 'payment' ? 'Вы выбрали билеты:' : 'Электронный билет'

    return (
        <section className="ticket">
            <TicketTitle title={title} />
            <div className="ticket__info-wrapper">
                <TicketDiscription selectedSession={selectedSession} selectedPlaces={selectedPlaces} />
                {
                    from === 'payment' &&
                    <>
                        <GetCode selectedSession={selectedSession} selectedPlaces={selectedPlaces} />
                        <Hint>
                            После оплаты билет будет доступен в этом окне, а также придёт вам на почту. Покажите QR-код нашему контроллёру у входа в зал.
                        </Hint>
                    </>

                }
                {
                    from === 'ticket' &&
                    <>
                        <ImageQR selectedSession={selectedSession} selectedPlaces={selectedPlaces} />
                        <Hint>
                            Покажите QR-код нашему контроллеру для подтверждения бронирования.
                        </Hint>
                    </>
                }
                <Hint>
                    Приятного просмотра!
                </Hint>
                {
                    from === 'ticket' &&
                    <div className="conf-step__buttons text-center">
                        <Link to={'/'} className="conf-step__button conf-step__button-regular link" onClick={() => setRequestData(true)}>
                                Вернуться на главную
                        </Link>
                    </div>
                }
            </div>
        </section>
    )
}