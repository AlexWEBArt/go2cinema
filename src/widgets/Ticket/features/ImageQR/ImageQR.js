import { QRCodeSVG } from 'qrcode.react';

export default function ImageQR({ selectedSession, selectedPlaces }) {
    const { hallName, film, startSession } = selectedSession

    const QRtext = `
        Электронный билет на фильм ${film.film_name}, 
        в зале ${hallName}, начало сеанса ${startSession}. 
        Ваши места (ряд/место): ${selectedPlaces.map(selectedPlace => selectedPlace.row + '/' + selectedPlace.place)}. 
        Приятного просмотра!
    `

    return (
        <>
            <div className="ticket__info-qr">
                <QRCodeSVG value={QRtext} />
            </div>
        </>
    )
}