import React from 'react';
import img from './got.jpeg';
import './errorMessage.css'

const ErrorMessage = () => {
    return (
        <>
            <img src={img} alt="Error"/>
            <span>Something does wrong</span>
        </>
    )
}

export default ErrorMessage;