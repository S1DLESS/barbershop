import React from 'react';
import {Link} from 'react-router-dom';
import './footer.css';


export default function Footer() {
    return (
        <nav>
            <div className="nav-wrapper brown">
                <a href="/" className="brand-logo">Barbershop</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="#services">Услуги</a></li>
                    <li><a href="#barbers">Барберы</a></li>
                    <li><a href="#articles">Статьи</a></li>
                    <li><a href="#news">Новости</a></li>
                    <li><a href="#contacts">Контакты</a></li>
                    <li><Link to='/appointment' className="btn-large black">Записаться</Link></li>
                </ul>
            </div>
        </nav>
    )
}