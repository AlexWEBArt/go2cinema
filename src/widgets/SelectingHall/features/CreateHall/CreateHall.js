import { useContext, useEffect, useState } from "react"
import { HallNameContext } from "../../../../providers/HallConfigProvider/context/HallNameProvider"
import { AppDataContext } from "../../../../providers/AppDataProvider/AppDataProvider"
import Modal from "../../../../root/UI Kit/Modal/Modal"
import Hint from "../../../Ticket/features/Hint/Hint"

export default function CreateHall() {
    const { hallName, setHallName, request, setRequest } = useContext(HallNameContext)
    const { setRequestData } = useContext(AppDataContext)

    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const createHall = async () => {
            return await fetch('https://go2cinema-backend.onrender.com/createHall', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(hallName)
            })
        }

        if (request) {
            createHall().then(result => {
                if (result) setRequestData(true)
            })

            setRequest(false)
        }
    }, [request, hallName, setRequestData, setRequest])

    const handleCreateHall = async (e) => {
        e.preventDefault()
        const input = e.target.closest('form').elements.hallName
        const { value } = input

        if (value.length < 2) {
            input.classList.add('invalid')
            return 
        }
        input.classList.remove('invalid')
        
        setHallName({ hall_name: value })

        setRequest(true)

        handleRemoveModal(e)
    }

    const handleChange = (e) => {
        const { value } = e.target
        if (value.length > 1 && e.target.classList.contains('invalid')) {
            e.target.classList.remove('invalid')
        }
    }

    const handleRemoveModal = (e) => {
        e.preventDefault()
        setVisible(false)
    }

    const handleCallModal = () => {
        setVisible(true)
    }

    return (
        <>
            <button className="conf-step__button conf-step__button-accent" onClick={handleCallModal}>Создать зал</button>
            {
                visible &&
                    <Modal
                        title={'Добавление зала'}
                        form={
                            <form action="add_hall" method="post" acceptCharset="utf-8">
                                <label className="conf-step__label conf-step__label-fullsize" htmlFor="name">
                                    Название зала
                                    <input className="conf-step__input" type="text" placeholder="Например, &laquo;Зал 1&raquo;" name="hallName" required onChange={handleChange}/>
                                </label>
                                <div className="conf-step__buttons text-center">
                                    <input type="submit" value="Добавить зал" className="conf-step__button conf-step__button-accent" onClick={handleCreateHall} />
                                    <button className="conf-step__button conf-step__button-regular" onClick={handleRemoveModal}>Отменить</button>
                                </div>
                            </form>
                        }
                        handleRemoveModal={() => setVisible(false)}
                    />
            }
        </>
    )
}