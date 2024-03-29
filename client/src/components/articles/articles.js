import React from 'react';
import {config} from '../../service/config'


export default function Articles() {
    return (
        <div className="row">
            <div className="col s3">
                <div className="card">
                    <div className="card-image">
                        <img src={`${config.serverUrl}/static/articles/1.webp`} alt='article1'/>
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
                        <img src={`${config.serverUrl}/static/articles/2.webp`} alt='article2'/>
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
                        <img src={`${config.serverUrl}/static/articles/3.webp`} alt='article3'/>
                    </div>
                    <div className="card-content">
                        <p><b>Сколько можно заработать на барбершопах?</b></p><br/>
                        <p>Насколько это выгодно? Почему нужно открываться именно сейчас. Это выгодно. В среднем мужчины стригутся один раз в месяц, но тенденция такова, что сейчас они начали гораздо чаще ходить в барбершопы или в парикмахерские. Например, в Европе и в Америке мужчины стригутся раз в две недели. Скоро это дойдет и до Беларуси.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}