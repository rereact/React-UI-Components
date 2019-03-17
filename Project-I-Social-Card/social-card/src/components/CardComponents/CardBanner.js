import React from 'react';
import './Card.css';
import banner from './banner.png'

const CardBanner = () => {
    return (
        <div>
            <img className="banner" src={banner} alt="Banner" />
        </div>
    )
}

export default CardBanner