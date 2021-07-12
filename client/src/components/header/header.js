import React from 'react';
import {Link} from 'react-router-dom';
import './header.css';


export default function Header({instance}) {
    return (
        <>
            <nav>
                <div className="nav-wrapper brown">
                    <a href="/" className="brand-logo">Barbershop</a>
                    <a href="##" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li><a href="#services">Услуги</a></li>
                        <li><a href="#barbers">Барберы</a></li>
                        <li><a href="#articles">Статьи</a></li>
                        <li><a href="#news">Новости</a></li>
                        <li><a href="#contacts">Контакты</a></li>
                        <li><Link to='/appointment' className="btn-large black">Записаться</Link></li>
                    </ul>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-demo">
                <li><a href="#services" onClick={() => instance.close()}>Услуги</a></li>
                <li><a href="#barbers" onClick={() => instance.close()}>Барберы</a></li>
                <li><a href="#articles" onClick={() => instance.close()}>Статьи</a></li>
                <li><a href="#news" onClick={() => instance.close()}>Новости</a></li>
                <li><a href="#contacts" onClick={() => instance.close()}>Контакты</a></li>
                <li><Link to='/appointment' className="btn-large black" onClick={() => instance.destroy()}>Записаться</Link></li>
            </ul>
        </>
    )
}