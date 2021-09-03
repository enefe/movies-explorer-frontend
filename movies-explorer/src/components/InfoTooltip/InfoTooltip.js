import React from 'react';
import './InfoTooltip.css';

function InfoTooltip(props) {
    return (
        <div className={`infoTooltip ${props.isOpen && 'infoTooltip_opened'}`}>
            <div className="infoTooltip__container">
                <button onClick={props.onClose} type="button" className="infoTooltip__close"></button>
                <form className="infoTooltip__form" noValidate> 
                        <p className="infoTooltip__status">{props.status === 'success' ? 'Профиль обновлён! =)' : 'Что-то пошло не так! Попробуйте ещё раз.'}</p>
                </form>
            </div>
        </div>
    )
}

export default InfoTooltip;