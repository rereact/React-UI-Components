import React from 'react';
import './Header.css';
import LambdaLogo from './LambdaLogo.png'

const ImageThumbnail = () => {
    return (
        <div>
            <img className="logo" src={LambdaLogo} alt="Lambda Logo" />
        </div>
    )
}

export default ImageThumbnail