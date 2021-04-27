import React from 'react';
import {Link} from 'react-router-dom';


export default function Header() {
    return (
        <>
            <h1>Barbershop</h1>
            <Link to='/appointment'><button className="btn">Записаться</button></Link>
        </>
    )
}