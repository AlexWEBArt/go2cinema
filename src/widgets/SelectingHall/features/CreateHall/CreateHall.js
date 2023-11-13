import { useState } from "react"
import Modal from "../../../../root/UI Kit/Modal/Modal"

export default function CreateHall({setCallModal}) {
    const [hallName, setHallName] = useState('')

    const handleChangeName = (e) => {
        const { value } = e.target
        setHallName(value)
    }

    const handleCreateHall = async () => {
        // return await fetch('http://localhost:7070/createHall', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(hallName)
        // })
    }

    const handleRemoveModal = (e) => {
        e.preventDefault()
        e.target.closest('.popup').classList.remove('active')
    }

    const handleCallModal = () => {
        document.querySelector('.popup').classList.add('active')
        setCallModal({
            title: 'Добавление зала', form: (
                <form action="add_hall" method="post" accept-charset="utf-8">
                    <label class="conf-step__label conf-step__label-fullsize" for="name">
                        Название зала
                        <input class="conf-step__inputв" type="text" placeholder="Например, &laquo;Зал 1&raquo;" name="name" required onChange={handleChangeName} />
                    </label>
                    <div class="conf-step__buttons text-center">
                        <input type="submit" value="Добавить зал" class="conf-step__button conf-step__button-accent" onClick={handleCreateHall} />
                        <button class="conf-step__button conf-step__button-regular" onClick={handleRemoveModal}>Отменить</button>
                    </div>
                </form>
            )
        })
    }

    return (
        <button className="conf-step__button conf-step__button-accent" onClick={handleCallModal}>Создать зал</button>

    )
}