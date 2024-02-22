import CreateSessions from '../CreateSessions/CreateSessions'
import CreateSessionsPrices from '../CreateSessionsPrices/CreateSessionsPrices'
import HallsConfiguration from '../HallsConfiguration/HallsConfiguration'
import OpenSession from '../OpenSession/OpenSession'
import PanelItem from '../PanelItem/PanelItem'
import SelectingHall from '../SelectingHall/SelectingHall'

import { v4 as uuidv4 } from "uuid"

export default function AdminPanel({data, setCallModal}) {

    const { films, halls, seances } = data

    const steps = [
        {
            title: 'Управление залами',
            widgets: (
                <>
                    <SelectingHall halls={halls} setCallModal={setCallModal}/>
                </>
            )
        }, 
        {
            title: 'Конфигурация залов',
            widgets: (
                <>
                    <HallsConfiguration halls={halls}/>
                </>
            )
        },
        {
            title: 'Конфигурация цен',
            widgets: (
                <>
                    <CreateSessionsPrices halls={halls}/>
                </>
            )
        },
        {
            title: 'Сетка сеансов',
            widgets: (
                <>
                    <CreateSessions data={data} filmsList={films} seances={seances} setCallModal={setCallModal}/>
                </>
            )
        },
        {
            title: 'Открыть продажи',
            widgets: (
                <>
                    <OpenSession halls={halls}/>
                </>
            )
        }
    ]

    return (
        <main className="conf-steps">
            {steps.map(step => <PanelItem key={uuidv4()} step={step}/>)}
        </main>
    )
}