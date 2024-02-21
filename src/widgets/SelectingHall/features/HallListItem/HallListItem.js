import { useState } from "react"
import Modal from "../../../../root/UI Kit/Modal/Modal"
import ErrorMessage from "../../../../root/ErrorMessage/ErrorMessage"

export default function HallListItem({ hall, setCallModal }) {
    const [visibleModal, setVisibleModal] = useState(false)
    const [visibleError, setVisibleError] = useState(false)

    const handleRemoveModal = (e) => {
        e.preventDefault()
        setVisibleModal(false)
    }

    const handleRemoveError = (e) => {
        e.preventDefault()

        setVisibleError(false)
    }

    const handleRemoveHall = async (e, id) => {
        e.preventDefault()
        const result = await fetch('http://localhost:7070/removeHall', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ hall_id: id })
        })
        handleRemoveModal(e)
        if (!result.ok) return setVisibleError(true)
    }

    const handleCallModal = () => {
        setVisibleModal(true)
    }

    return (
        <li>
            {hall.hall_name}
            <button className="conf-step__button conf-step__button-trash" onClick={(e) => handleCallModal(e, hall.hall_id)}></button>
            {
                visibleModal &&
                <Modal
                    title={'Удаление зала'}
                    form={
                        <form action="delete_hall" method="post" acceptCharset="utf-8">
                            <p className="conf-step__paragraph">Вы действительно хотите удалить зал <span>{hall.hall_name}</span>?</p>

                            <div className="conf-step__buttons text-center">
                                <input type="submit" value="Удалить" className="conf-step__button conf-step__button-accent" onClick={(e) => handleRemoveHall(e, hall.hall_id)} />
                                <button className="conf-step__button conf-step__button-regular" onClick={handleRemoveModal}>Отменить</button>
                            </div>
                        </form>
                    }
                    handleRemoveModal={() => setVisibleModal(false)}
                />
            }
                        {
                visibleError &&
                <ErrorMessage
                    message={'Этот зал установлен для показа сеансов. Отмените сеансы которые проходят в этом зале и повторите попытку.'}
                    onClose={handleRemoveError}
                />
            }
        </li>
    )
}