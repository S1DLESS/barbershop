import React from 'react';
import Header from '../../header/header';
import './homePage.css';
import img1 from './1.jpg';
import img2 from './2.jpg';
import img3 from './3.jpg';
import barber1 from './barber1.webp';
import barber2 from './barber2.webp';
import barber3 from './barber3.webp';
import barber4 from './barber4.webp';
import barber5 from './barber5.webp';
import barber6 from './barber6.webp';
import article1 from './article1.webp';
import article2 from './article2.webp';
import article3 from './article3.webp';
import news1 from './news1.webp';
import news2 from './news2.webp';
import news3 from './news3.webp';
import Footer from '../../footer/footer';


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
                    <img className="col s4" src={img1} alt="1"></img>
                    <img className="col s4" src={img2} alt="2"></img>
                    <img className="col s4" src={img3} alt="3"></img>
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
                <div className="divider" id="services"></div>
                <div className="section flow-text">
                    <span>Мужская стрижка</span>
                    <span className="right">20 руб.</span>
                </div>
                <div className="divider"></div>
                <div className="section flow-text">
                    <span>Детская стрижка</span>
                    <span className="right">20 руб.</span>
                </div>
                <div className="divider"></div>
                <div className="section flow-text">
                    <span>"Отец+Сын" или "Друзья 1+1"</span>
                    <span className="right">35 руб.</span>
                </div>
                <div className="divider"></div>
                <div className="section flow-text">
                    <span>Коррекция Бороды и усов с распариванием</span>
                    <span className="right">20 руб.</span>
                </div>
                <div className="divider"></div>
                <div className="section flow-text">
                    <span>Бритьё шейвером в ноль (голова или лицо)</span>
                    <span className="right">10 руб.</span>
                </div>
                <div className="divider"></div>
                <div className="section flow-text">
                    <span>Бритьё опасной бритвой в ноль с распариванием</span>
                    <span className="right">25 руб.</span>
                </div><div className="divider"></div>
                <div className="section flow-text">
                    <span>Камуфлирование седины</span>
                    <span className="right">20-30 руб.</span>
                </div>
                <div className="divider"></div>
                <div className="section flow-text">
                    <span>Удаление волос воском</span>
                    <span className="right">10 руб.</span>
                </div>
                <div className="divider"></div>
                <div className="section flow-text">
                    <span>Black Mask (Чёрная Маска)</span>
                    <span className="right">20 руб.</span>
                </div>
                <h2 className="center" id="barbers">Барберы</h2>
                <div className="row">
                    <div className="col s4">
                        <div className="card">
                            <div className="card-image">
                                <img src={barber1} alt="barber1"></img>
                                <span className="card-title">Анастасия Костюк</span>
                            </div>
                            <div className="card-content">
                                <p>Барбер-Girl. С большой уверенностью подходит к своей работе.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col s4">
                        <div className="card">
                            <div className="card-image">
                                <img src={barber2} alt="barber2"></img>
                                <span className="card-title">Ника Иванкевич</span>
                            </div>
                            <div className="card-content">
                                <p>Талантливый мастер, с большой ответственностью подходит к своему делу.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col s4">
                        <div className="card">
                            <div className="card-image">
                                <img src={barber3} alt="barber3"></img>
                                <span className="card-title">Тарас Цветков</span>
                            </div>
                            <div className="card-content">
                                <p>Креативный Барбер. С большой уверенностью подойдёт к выбору вашего индивидуального стиля. Мастер удлинённых стрижек.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col s4">
                        <div className="card">
                            <div className="card-image">
                                <img src={barber4} alt="barber4"></img>
                                <span className="card-title">Евген Иванкевич</span>
                            </div>
                            <div className="card-content">
                                <p>Опытный Барбер, с большой уверенностью подходит к выполнению своей работы. Отличный собеседник.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col s4">
                        <div className="card">
                            <div className="card-image">
                                <img src={barber5} alt="barber5"></img>
                                <span className="card-title">Влад Дубовик</span>
                            </div>
                            <div className="card-content">
                                <p>Барбер, с горящими глазами подходит к выполнению своей работы.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col s4">
                        <div className="card">
                            <div className="card-image">
                                <img src={barber6} alt="barber6"></img>
                                <span className="card-title">Борис Войнилович</span>
                            </div>
                            <div className="card-content">
                                <p>Барбер. С большой ответственностью относится к пожеланиям каждого гостя.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <h2 className="center" id="articles">Статьи</h2>
                <div className="row">
                    <div className="col s1 valign-wrapper">
                        <i className="large material-icons">chevron_left</i>
                    </div>
                    <div className="col s3">
                        <div className="card">
                            <div className="card-image">
                                <img src={article1} alt='article1'/>
                            </div>
                            <div className="card-content">
                                <p><b>Топ-10 ошибок клиентов барбершопа</b></p><br/>
                                <p>Мы расскажем о топ 10 ошибках, которые можно избежать при посещении любого барбершопа. Очень важно дочитать эту статью до конца, чтобы, приходя в барбершоп, вы могли по-настоящему отдохнуть, расслабиться и не заморачивались о том, что что-то нельзя или вы что-то не знаете.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col s3">
                        <div className="card">
                            <div className="card-image">
                                <img src={article2} alt='article2'/>
                            </div>
                            <div className="card-content">
                                <p><b>Немного о стайлингах</b></p><br/>
                                <p>Очень частый вопрос от наших клиентов: «Как понять, нужен ли стайлинг для волос?» Мы разберемся, какие бывают виды стайлинга и как ими пользоваться. Стайлинги для волос на голове можно условно разделить на несколько категорий:</p>
                            </div>
                        </div>
                    </div>
                    <div className="col s3">
                        <div className="card">
                            <div className="card-image">
                                <img src={article3} alt='article3'/>
                            </div>
                            <div className="card-content">
                                <p><b>Сколько можно заработать на барбершопах?</b></p><br/>
                                <p>Насколько это выгодно? Почему нужно открываться именно сейчас. Это выгодно. В среднем мужчины стригутся один раз в месяц, но тенденция такова, что сейчас они начали гораздо чаще ходить в барбершопы или в парикмахерские. Например, в Европе и в Америке мужчины стригутся раз в две недели. Скоро это дойдет и до России.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col s1">
                        <i className="large material-icons">chevron_right</i>
                    </div>
                </div>
                <h2 className="center" id="news">Новости</h2>
                <div className="row">
                    <div className="col s3">
                        <div className="card">
                            <div className="card-image">
                                <img src={news1} alt='news1'/>
                            </div>
                            <div className="card-content">
                                <p><b>Заходи в наш Инстаграм</b></p><br/>
                                <p>Смотри новые фото, записывайся к своему барберу. Только лучшие барберы, только лучшая косметика, только лучшая атмосфера</p>
                            </div>
                        </div>
                    </div>
                    <div className="col s3">
                        <div className="card">
                            <div className="card-image">
                                <img src={news2} alt='news2'/>
                            </div>
                            <div className="card-content">
                                <p><b>Барбершоп с заботой о вашей бороде</b></p><br/>
                                <p>Всё это можно приобрести в нашем барбершопе по очень приятным ценам</p>
                            </div>
                        </div>
                    </div>
                    <div className="col s3">
                        <div className="card">
                            <div className="card-image">
                                <img src={news3} alt='news3'/>
                            </div>
                            <div className="card-content">
                                <p><b>Barbershop ищет тебя!</b></p><br/>
                                <p>Ищем моделей для нашего портфолио. Нужны разные типажи без возрастных ограничений!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}