import CreateSessions from '../CreateSessions/CreateSessions'
import CreateSessionsPrices from '../CreateSessionsPrices/CreateSessionsPrices'
import HallsConfiguration from '../HallsConfiguration/HallsConfiguration'
import OpenSession from '../OpenSession/OpenSession'
import PanelItem from '../PanelItem/PanelItem'
import SelectingHall from '../SelectingHall/SelectingHall'
import './adminPanel.css'
import './normalize.css'

import { v4 as uuidv4 } from "uuid"


export default function AdminPanel({data, setCallModal}) {
    const { films, halls, seances } = data

    const filmsList = [
        {
            image: 'i/poster1.jpg',
            title: 'Звёздные войны XXIII: Атака клонированных клонов',
            discription: 'Две сотни лет назад малороссийские хутора разоряла шайка нехристей-ляхов во главе с могущественным колдуном.',
            duration: '130 минут',
            origin: 'США',
            hallsSessions: [
                {
                    hallName: 'Зал 1',
                    sessions: [
                        '10:20', '14:10', '18:40', '22:00'
                    ]
                },
                {
                    hallName: 'Зал 2',
                    sessions: [
                        '11:15', '14:40', '16:00', '18:30', '21:00', '23:30'
                    ]
                },
            ]
        },
        {
            image: 'i/poster1.jpg',
            title: 'Альфа',
            discription: '20 тысяч лет назад Земля была холодным и неуютным местом, в котором смерть подстерегала человека на каждом шагу.',
            duration: '96 минут',
            origin: 'Франция',
            hallsSessions: [
                {
                    hallName: 'Зал 1',
                    sessions: [
                        '12:10', '16:20'
                    ]
                },
                {
                    hallName: 'Зал 2',
                    sessions: [
                        '13:25', '17:40', '19:30'
                    ]
                },
            ]
        },
        {
            image: 'i/poster1.jpg',
            title: 'Хищник',
            discription: 'Самые опасные хищники Вселенной, прибыв из глубин космоса, высаживаются на улицах маленького городка, чтобы начать свою кровавую охоту. Генетически модернизировав себя с помощью ДНК других видов, охотники стали ещё сильнее, умнее и беспощаднее.',
            duration: '101 минут',
            origin: 'Канада, США',
            hallsSessions: [
                {
                    hallName: 'Зал 1',
                    sessions: [
                        '8:20', '17:10'
                    ]
                },
                {
                    hallName: 'Зал 2',
                    sessions: [
                        '13:15', '17:40', '22:20'
                    ]
                },
            ]
        },
    ]

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