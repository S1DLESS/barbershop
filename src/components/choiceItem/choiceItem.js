import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './choiceItem.css';

export default class ChoiceItem extends Component {

    renderDeleteButton() {
        if (this.props.descr) {
            return (
                <button className="del-btn-choiceitem">
                    <i className="material-icons">do_not_disturb_on</i>
                </button>
            )
        }
    }

    render() {
        return (
            <div className="container-choiceitem">
                <Link to={`/appointment/${this.props.url}`} className="container-left-choiceitem">
                    <div>
                        <i className="material-icons">{this.props.icon}</i>
                    </div>
                    <div>
                        <div><span>{this.props.title}</span></div>
                        <div><span>{this.props.descr}</span></div>
                    </div>
                </Link>
                {this.renderDeleteButton()}
            </div>
        )
    }
}

/*
Состояние 1: без стэйта
    Кнопки минуса нет
    Доп.инфы нет
    Цвет серый
Состояние 2: со стэйтом
    Кнопка минус есть
    Доп.инфа - со стэйта
    Цвет синий (активный)
*/