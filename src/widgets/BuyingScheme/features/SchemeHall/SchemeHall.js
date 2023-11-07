export default function SchemeHall({hallConfig}) {

    const hallScheme = <div dangerouslySetInnerHTML={{ __html: hallConfig.replace(/conf-step/g, 'buying-scheme') }} />
    console.log(hallScheme)

    
    return (
        <div className="buying-scheme__wrapper">
            {hallConfig.replace(/conf-step/g, 'buying-scheme')}
            <div className="buying-scheme__row">
                <span className="buying-scheme__chair buying-scheme__chair_disabled"></span><span className="buying-scheme__chair buying-scheme__chair_disabled"></span>
                <span className="buying-scheme__chair buying-scheme__chair_disabled"></span><span className="buying-scheme__chair buying-scheme__chair_disabled"></span>
                <span className="buying-scheme__chair buying-scheme__chair_disabled"></span><span className="buying-scheme__chair buying-scheme__chair_standart"></span>
                <span className="buying-scheme__chair buying-scheme__chair_standart"></span><span className="buying-scheme__chair buying-scheme__chair_disabled"></span>
                <span className="buying-scheme__chair buying-scheme__chair_disabled"></span><span className="buying-scheme__chair buying-scheme__chair_disabled"></span>
                <span className="buying-scheme__chair buying-scheme__chair_disabled"></span><span className="buying-scheme__chair buying-scheme__chair_disabled"></span>
            </div>  

            <div className="buying-scheme__row">
                <span className="buying-scheme__chair buying-scheme__chair_disabled"></span><span className="buying-scheme__chair buying-scheme__chair_disabled"></span>
                <span className="buying-scheme__chair buying-scheme__chair_disabled"></span><span className="buying-scheme__chair buying-scheme__chair_disabled"></span>
                <span className="buying-scheme__chair buying-scheme__chair_taken"></span><span className="buying-scheme__chair buying-scheme__chair_standart"></span>
                <span className="buying-scheme__chair buying-scheme__chair_standart"></span><span className="buying-scheme__chair buying-scheme__chair_standart"></span>
                <span className="buying-scheme__chair buying-scheme__chair_disabled"></span><span className="buying-scheme__chair buying-scheme__chair_disabled"></span>
                <span className="buying-scheme__chair buying-scheme__chair_disabled"></span><span className="buying-scheme__chair buying-scheme__chair_disabled"></span>
            </div>  

            <div className="buying-scheme__row">
                <span className="buying-scheme__chair buying-scheme__chair_disabled"></span><span className="buying-scheme__chair buying-scheme__chair_standart"></span>
                <span className="buying-scheme__chair buying-scheme__chair_standart"></span><span className="buying-scheme__chair buying-scheme__chair_standart"></span>
                <span className="buying-scheme__chair buying-scheme__chair_standart"></span><span className="buying-scheme__chair buying-scheme__chair_standart"></span>
                <span className="buying-scheme__chair buying-scheme__chair_standart"></span><span className="buying-scheme__chair buying-scheme__chair_standart"></span>
                <span className="buying-scheme__chair buying-scheme__chair_standart"></span><span className="buying-scheme__chair buying-scheme__chair_disabled"></span>
                <span className="buying-scheme__chair buying-scheme__chair_disabled"></span><span className="buying-scheme__chair buying-scheme__chair_disabled"></span>
            </div>  

            <div className="buying-scheme__row">
                <span className="buying-scheme__chair buying-scheme__chair_standart"></span><span className="buying-scheme__chair buying-scheme__chair_standart"></span>
                <span className="buying-scheme__chair buying-scheme__chair_standart"></span><span className="buying-scheme__chair buying-scheme__chair_standart"></span>
                <span className="buying-scheme__chair buying-scheme__chair_standart"></span><span className="buying-scheme__chair buying-scheme__chair_vip"></span>
                <span className="buying-scheme__chair buying-scheme__chair_vip"></span><span className="buying-scheme__chair buying-scheme__chair_standart"></span>
                <span className="buying-scheme__chair buying-scheme__chair_standart"></span><span className="buying-scheme__chair buying-scheme__chair_disabled"></span>
                <span className="buying-scheme__chair buying-scheme__chair_disabled"></span><span className="buying-scheme__chair buying-scheme__chair_disabled"></span>
            </div>  

            <div className="buying-scheme__row">
                <span className="buying-scheme__chair buying-scheme__chair_standart"></span><span className="buying-scheme__chair buying-scheme__chair_standart"></span>
                <span className="buying-scheme__chair buying-scheme__chair_standart"></span><span className="buying-scheme__chair buying-scheme__chair_standart"></span>
                <span className="buying-scheme__chair buying-scheme__chair_vip"></span><span className="buying-scheme__chair buying-scheme__chair_vip"></span>
                <span className="buying-scheme__chair buying-scheme__chair_vip"></span><span className="buying-scheme__chair buying-scheme__chair_vip"></span>
                <span className="buying-scheme__chair buying-scheme__chair_standart"></span><span className="buying-scheme__chair buying-scheme__chair_disabled"></span>
                <span className="buying-scheme__chair buying-scheme__chair_disabled"></span><span className="buying-scheme__chair buying-scheme__chair_disabled"></span>
            </div>  

            <div className="buying-scheme__row">
                <span className="buying-scheme__chair buying-scheme__chair_standart"></span><span className="buying-scheme__chair buying-scheme__chair_standart"></span>
                <span className="buying-scheme__chair buying-scheme__chair_standart"></span><span className="buying-scheme__chair buying-scheme__chair_standart"></span>
                <span className="buying-scheme__chair buying-scheme__chair_vip"></span><span className="buying-scheme__chair buying-scheme__chair_taken"></span>
                <span className="buying-scheme__chair buying-scheme__chair_taken"></span><span className="buying-scheme__chair buying-scheme__chair_taken"></span>
                <span className="buying-scheme__chair buying-scheme__chair_standart"></span><span className="buying-scheme__chair buying-scheme__chair_disabled"></span>
                <span className="buying-scheme__chair buying-scheme__chair_disabled"></span><span className="buying-scheme__chair buying-scheme__chair_disabled"></span>
            </div>  

            <div className="buying-scheme__row">
                <span className="buying-scheme__chair buying-scheme__chair_standart"></span><span className="buying-scheme__chair buying-scheme__chair_standart"></span>
                <span className="buying-scheme__chair buying-scheme__chair_standart"></span><span className="buying-scheme__chair buying-scheme__chair_standart"></span>
                <span className="buying-scheme__chair buying-scheme__chair_vip"></span><span className="buying-scheme__chair buying-scheme__chair_taken"></span>
                <span className="buying-scheme__chair buying-scheme__chair_taken"></span><span className="buying-scheme__chair buying-scheme__chair_vip"></span>
                <span className="buying-scheme__chair buying-scheme__chair_standart"></span><span className="buying-scheme__chair buying-scheme__chair_disabled"></span>
                <span className="buying-scheme__chair buying-scheme__chair_disabled"></span><span className="buying-scheme__chair buying-scheme__chair_disabled"></span>
            </div>  

            <div className="buying-scheme__row">
                <span className="buying-scheme__chair buying-scheme__chair_standart"></span><span className="buying-scheme__chair buying-scheme__chair_standart"></span>
                <span className="buying-scheme__chair buying-scheme__chair_standart"></span><span className="buying-scheme__chair buying-scheme__chair_standart"></span>
                <span className="buying-scheme__chair buying-scheme__chair_standart"></span><span className="buying-scheme__chair buying-scheme__chair_selected"></span>
                <span className="buying-scheme__chair buying-scheme__chair_selected"></span><span className="buying-scheme__chair buying-scheme__chair_standart"></span>
                <span className="buying-scheme__chair buying-scheme__chair_standart"></span><span className="buying-scheme__chair buying-scheme__chair_disabled"></span>
                <span className="buying-scheme__chair buying-scheme__chair_disabled"></span><span className="buying-scheme__chair buying-scheme__chair_disabled"></span>
            </div>  

            <div className="buying-scheme__row">
                <span className="buying-scheme__chair buying-scheme__chair_standart"></span><span className="buying-scheme__chair buying-scheme__chair_taken"></span>
                <span className="buying-scheme__chair buying-scheme__chair_standart"></span><span className="buying-scheme__chair buying-scheme__chair_taken"></span>
                <span className="buying-scheme__chair buying-scheme__chair_standart"></span><span className="buying-scheme__chair buying-scheme__chair_taken"></span>
                <span className="buying-scheme__chair buying-scheme__chair_standart"></span><span className="buying-scheme__chair buying-scheme__chair_standart"></span>
                <span className="buying-scheme__chair buying-scheme__chair_standart"></span><span className="buying-scheme__chair buying-scheme__chair_standart"></span>
                <span className="buying-scheme__chair buying-scheme__chair_standart"></span><span className="buying-scheme__chair buying-scheme__chair_standart"></span>
            </div>  

            <div className="buying-scheme__row">
                <span className="buying-scheme__chair buying-scheme__chair_standart"></span><span className="buying-scheme__chair buying-scheme__chair_standart"></span>
                <span className="buying-scheme__chair buying-scheme__chair_standart"></span><span className="buying-scheme__chair buying-scheme__chair_standart"></span>
                <span className="buying-scheme__chair buying-scheme__chair_standart"></span><span className="buying-scheme__chair buying-scheme__chair_taken"></span>
                <span className="buying-scheme__chair buying-scheme__chair_taken"></span><span className="buying-scheme__chair buying-scheme__chair_taken"></span>
                <span className="buying-scheme__chair buying-scheme__chair_standart"></span><span className="buying-scheme__chair buying-scheme__chair_standart"></span>
                <span className="buying-scheme__chair buying-scheme__chair_standart"></span><span className="buying-scheme__chair buying-scheme__chair_standart"></span>
            </div>
        </div>
    )
}