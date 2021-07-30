import React from 'react';
import { Link, useLocation } from 'react-router-dom';


const NotFound = () => {

    const location = useLocation();

    return (
        <>
            <div style={{color: 'white', fontSize: '20px',marginTop: '50px'}}>Sorry but page {location.pathname} is not defined</div>
            <Link to='/' style={{color: 'white', fontSize: '15px',marginTop: '20px'}}>Back to main</Link>
        </>
    )
}

export default NotFound;