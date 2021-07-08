import React, { Component } from 'react';
import DB from '../../service/service';


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

    renderItems(arr) {
        if (arr) {
            return (
                arr.map(value => {
                    return (
                        <div className="col s4" key={value.id}>
                            <div className="card">
                                <div className="card-image">
                                    <img src={`http://localhost:5000/static/barber/${value.img}`} alt={`barber${value.id}`}></img>
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