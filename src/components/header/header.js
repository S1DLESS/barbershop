import React from 'react';
import {Link} from 'react-router-dom';
import './header.css';


export default function Header() {
    return (
        <nav>
            <div className="nav-wrapper brown">
                <a href="#" className="brand-logo">Barbershop</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link>Услуги</Link></li>
                    <li><Link>Барберы</Link></li>
                    <li><Link>Статьи</Link></li>
                    <li><Link>Новости</Link></li>
                    <li><Link>Контакты</Link></li>
                    <li><Link>Отзывы</Link></li>
                    <li><Link to='/appointment' className="btn-large black">Записаться</Link></li>
                </ul>
            </div>
        </nav>
    )
}