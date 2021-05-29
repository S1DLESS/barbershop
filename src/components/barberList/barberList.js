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
            case 1: return barber1
            case 2: return barber2
            case 3: return barber3
            case 4: return barber4
            case 5: return barber5
            case 6: return barber6
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