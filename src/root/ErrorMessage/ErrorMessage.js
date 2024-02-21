import { useEffect } from "react";
import ReactDOM from 'react-dom';
import ErrorHeader from "./ErrorHeader/ErrorHeader";

export default function ErrorMessage({ message, onClose, onRepeat }) {

    const errorRoot = document.getElementById('root');
    const errorContainer = document.createElement('div');
    errorContainer.classList.add('popup')

    useEffect(() => {
        errorRoot.prepend(errorContainer);

        return () => {
            errorRoot.removeChild(errorContainer);
        };
    }, [errorContainer, errorRoot]);


    return (
        <>
            {
                ReactDOM.createPortal(
                    (<div className="error-container">
                        <div className="popup__content">
                            <ErrorHeader handleRemoveModal={onClose} />
                            <div className="popup__wrapper">
                                <p className="conf-step__paragraph">{message}</p>
                                <div className="conf-step__buttons text-center">
                                    <button className="conf-step__button conf-step__button-regular" onClick={onClose}>Ok</button>
                                    {
                                        onRepeat &&
                                        <button className="conf-step__button conf-step__button-regular" onClick={onRepeat}>Ok</button>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>),
                    errorContainer
                )}
        </>
    )
}