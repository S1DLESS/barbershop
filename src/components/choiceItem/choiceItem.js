import React, {Component} from 'react';
import './choiceItem.css';

export default class ChoiceItem extends Component {
    render() {
        return (
            <div className="container-choiceitem">
                <div>
                    <i className="material-icons">{this.props.icon}</i>
                </div>
                <div className="text-choiceitem">
                    <div><span>{this.props.title}</span></div>
                    <div><span>{this.props.descr}</span></div>
                </div>
                <div>
                    <i className="material-icons">do_not_disturb_on</i>
                </div>
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