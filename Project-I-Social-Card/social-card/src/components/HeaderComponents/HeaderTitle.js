import React from 'react';
import './Header.css';

const HeaderTitle = () => {
    return (
        <div>
            <div className="account">
                <p>Lambda School</p>
                <p className="handle-date">@lambdaSchool - 26 Jan</p>
            </div>
            <div>
                <p>Let's learn React by building simple interfaces with components. Don't try to</p>
                <p>overthink it, just keep it simple and have fun. Once you feel comfortable using</p>
                <p>components you are well on your way to mastering React!</p>
            </div>
        </div>
    )
}

export default HeaderTitle