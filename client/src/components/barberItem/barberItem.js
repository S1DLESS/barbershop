import React, {Component} from 'react';


export default class BarberItem extends Component {
    render() {
        return (
            <div>{this.props.name}</div>
        )
    }
}

/*
Приём с БД барбера и его вывод
При клике отправка id барбера в "общий state" и возврат на главную страницу
*/