import React from 'react';

import news1 from '../../img/news/1.webp';
import news2 from '../../img/news/2.webp';
import news3 from '../../img/news/3.webp';


export default function News() {
    return (
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
    )
}