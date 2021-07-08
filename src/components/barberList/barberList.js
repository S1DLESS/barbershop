import React, { Component } from 'react';
import DB from '../../service/service';

import barber1 from '../../img/barbers/1.webp';
import barber2 from '../../img/barbers/2.webp';
import barber3 from '../../img/barbers/3.webp';
import barber4 from '../../img/barbers/4.webp';
import barber5 from '../../img/barbers/5.webp';
import barber6 from '../../img/barbers/6.webp';


export default class BarberList extends Component {

    db = new DB()
    state = {
        barberList: null
    }

    componentDidMount() {
        this.db.getAllBarbers()
            .then(barberList => {
                    this.setState({barberList})
                });
    }

    imgSrc(id) {
        switch (id) {
            case "60e5ee094aacbf0ca0d924bd": return barber1
            case "60e5ee604aacbf0ca0d924bf": return barber2
            case "60e5ee884aacbf0ca0d924c1": return barber3
            case "60e5ee9d4aacbf0ca0d924c3": return barber4
            case "60e5eeb24aacbf0ca0d924c5": return barber5
            case "60e5eec54aacbf0ca0d924c7": return barber6
            default: return ''
        }
    }

    renderItems(arr) {
        if (arr) {
            return (
                arr.map(value => {
                    return (
                        <div className="col s4" key={value.id}>
                            <div className="card">
                                <div className="card-image">
                                    <img src={this.imgSrc(value.id)} alt={`barber${value.id}`}></img>
                                    <span className="card-title">{value.name}</span>
                                </div>
                                <div className="card-content">
                                    <p>{value.description}</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            )
        }
    }

    render() {
        const {barberList} = this.state;

        if (!barberList) {
            return (
                <div className="progress">
                    <div className="indeterminate"></div>
                </div>
            )
        }

        return (
            <div className="row">
                {this.renderItems(barberList)}
            </div>
        )
    }
}