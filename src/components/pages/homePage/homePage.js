import React from 'react';
import Header from '../../header/header';
import Footer from '../../footer/footer';
import ServiceList from '../../serviceList/serviceList';
import BarberList from '../../barberList/barberList';
import Articles from '../../articles/articles';
import News from '../../news/news';
import './homePage.css';


export default function HomePage() {
    return (
        <>
            <Header/>
            <div className="container">
                <div className="row hp-row-mt" id="contacts">
                    <div className="col s4 center">
                        <i className="medium material-icons">location_on</i>
                        <div className="flow-text">Молодечно</div>
                        <div>ул.Волынца, 12Е (2 этаж)</div>
                    </div>
                    <div className="col s4 center">
                        <i className="medium material-icons">access_time</i>
                        <div className="flow-text">9:00 – 21:00</div>
                        <div>БЕЗ ВЫХОДНЫХ<br/>и праздничных дней</div>
                    </div>
                    <div className="col s4 center">
                        <i className="medium material-icons">call</i>
                        <div className="flow-text">Телефон</div>
                        <div>+375(29) 6-200-220</div>
                    </div>
                </div>
                <div className="row">
                    <img className="col s4" src={`http://localhost:5000/static/homepage/1.jpg`} alt="1"></img>
                    <img className="col s4" src={`http://localhost:5000/static/homepage/2.jpg`} alt="2"></img>
                    <img className="col s4" src={`http://localhost:5000/static/homepage/3.jpg`} alt="3"></img>
                </div>
                <div className="row center flow-text">
                    Barbershop<br/>
                    Мужская парикмахерская премиум класса.<br/>
                    Единственный настоящий БАРБЕРШОП в регионе<br/>
                    с доступными ценами.<br/>

                    Своеобразный мужской клуб с Бесплатной игровой зоной (настольные игры, Playstation4<br/>
                    и огромной плазмой, зоной для отдыха и Шоурумом эксклюзивной косметики<br/>
                    для мужчин от мировых брендов, где<br/>
                    мужчина может не только привести себя в порядок, но и просто провести приятно время после стрижки, выпив чашечку горячего кофе за счёт мужского клуба.<br/>

                    Записываться к нам лучше заранее!<br/>
                    A1 +37529-6-200-220<br/>
                    Viber Telegram
                </div>
                <h2 className="center" id="services">Услуги</h2>
                <ServiceList/>
                <h2 className="center" id="barbers">Барберы</h2>
                <BarberList/>
                <h2 className="center" id="articles">Статьи</h2>
                <Articles/>
                <h2 className="center" id="news">Новости</h2>
                <News/>
            </div>
            <Footer/>
        </>
    )
}