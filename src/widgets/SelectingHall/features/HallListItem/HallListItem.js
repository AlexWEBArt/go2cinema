import Modal from "../../../../root/UI Kit/Modal/Modal"

export default function HallListItem({ hall, setCallModal }) {

    const handleRemoveModal = (e) => {
        e.preventDefault()
        e.target.closest('.popup').classList.remove('active')
    }

    const handleRemoveHall = async (e, id) => {
        e.preventDefault()
        console.log(id)
        await fetch('http://localhost:7070/removeHall', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ hall_id: id })
        })
        handleRemoveModal(e)
    }

    const handleCallModal = (e, id) => {
        const { target } = e
        const hallName = target.closest('li').innerText
        document.querySelector('.popup').classList.add('active')
        setCallModal({
            title: 'Удаление зала', form: (
                <form action="delete_hall" method="post" acceptCharset="utf-8">
                    <p className="conf-step__paragraph">Вы действительно хотите удалить зал <span>{hallName}</span>?</p>

                    <div className="conf-step__buttons text-center">
                        <input type="submit" value="Удалить" className="conf-step__button conf-step__button-accent" onClick={(e) => handleRemoveHall(e, id)} />
                        <button className="conf-step__button conf-step__button-regular" onClick={handleRemoveModal}>Отменить</button>
                    </div>
                </form>
            )
        })
    }

    return (
        <li>
            {hall.hall_name}
            <button className="conf-step__button conf-step__button-trash" onClick={(e) => handleCallModal(e, hall.hall_id)}></button>
        </li>
    )
}