import React, {Component} from 'react';

export default class ChoiceItem extends Component {
    render() {
        return (
            <div>
                <div>
                    <i></i>
                    <div>
                        <span>Барберы</span>
                    </div>
                    <div>descr</div>
                    <i></i>
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