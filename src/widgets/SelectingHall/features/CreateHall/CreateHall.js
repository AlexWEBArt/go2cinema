import { useEffect, useState } from "react"
import Modal from "../../../../root/UI Kit/Modal/Modal"

export default function CreateHall({setCallModal}) {
    const [hallName, setHallName] = useState('')
    const [requestData, setRequestData] = useState({
        hall_name: ''
    })
    useEffect(() => {
        console.log(hallName)
        // const createHall = async (e) => {
        //     await fetch('http://localhost:7070/createHall', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(requestData)
        // })
        // }
        // if (requestData.hall_name) {
        //     createHall()
        // }
    }, [hallName])
    
    const handleChangeName = (e) => {
        const { value } = e.target
        // setHallName(prevValue => prevValue + value)
        setHallName(value);
    }

    const handleCreateHall = async (e) => {
        e.preventDefault()
        // console.log(JSON.stringify({hall_name: hallName}))
        // return await fetch('http://localhost:7070/createHall', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({hall_name: hallName})
        // })
        console.log(hallName)
        // setRequestData({ hall_name: hallName });
        await fetch('http://localhost:7070/createHall', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ hall_name: 'Зал 3' }),
        }).then(result => console.log(result));
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