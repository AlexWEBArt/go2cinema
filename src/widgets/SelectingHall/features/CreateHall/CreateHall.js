import { useContext, useEffect, useState } from "react"
import Modal from "../../../../root/UI Kit/Modal/Modal"
import { HallNameContext } from "../../../../providers/HallConfigProvider/context/HallNameProvider"

export default function CreateHall({setCallModal}) {
    // const [hallName, setHallName] = useState('')
    // const [request, setRequest] = useState(false)

    const {hallName, setHallName, request, setRequest} = useContext(HallNameContext)

    useEffect(() => {
        const createHall = async () => {
            await fetch('http://localhost:7070/createHall', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(hallName)
        })
        }

        if (request) {
            createHall()
            setRequest(false)
        }
    }, [request])
    
    const handleChangeName = (e) => {
        const { value } = e.target
        // setHallName(prevValue => prevValue + value)
        setHallName({ hall_name: value});
    }

    const handleCreateHall = async (e) => {
        e.preventDefault()

        setRequest(true)

        handleRemoveModal(e)
    }

    const handleRemoveModal = (e) => {
        e.preventDefault()
        e.target.closest('.popup').classList.remove('active')
    }

    const handleCallModal = () => {
        document.querySelector('.popup').classList.add('active')
        setCallModal({
            title: 'Добавление зала', form: (
                <form action="add_hall" method="post" acceptCharset="utf-8">
                    <label className="conf-step__label conf-step__label-fullsize" htmlFor="name">
                        Название зала
                        <input className="conf-step__input" type="text" placeholder="Например, &laquo;Зал 1&raquo;" name="name" required onChange={handleChangeName} />
                    </label>
                    <div className="conf-step__buttons text-center">
                        <input type="submit" value="Добавить зал" className="conf-step__button conf-step__button-accent" onClick={handleCreateHall} />
                        <button className="conf-step__button conf-step__button-regular" onClick={handleRemoveModal}>Отменить</button>
                    </div>
                </form>
            )
        })
    }

    return (
        <button className="conf-step__button conf-step__button-accent" onClick={handleCallModal}>Создать зал</button>

    )
}