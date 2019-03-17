import React from 'react';
import './Card.css';

const CardContent = () => {
    return (
        <div className="card">
            <p className="bold">Get Started with React</p>
            <p>React makes it painless to create interactive UIs. Design simple views for</p>
            <p>each state in your application.</p>
            <p className="source">reactjs.org</p>
        </div>
    )
}

export default CardContent