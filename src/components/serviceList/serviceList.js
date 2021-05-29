import React, { Component } from 'react';
import DB from '../../service/service';


export default class ServiceList extends Component {

    db = new DB()
    state = {
        serviceList: null
    }

    componentDidMount() {
        this.db.getAllServices()
            .then(serviceList => {
                    this.setState({serviceList})
                });
    }

    renderItems(arr) {
        if (arr) {
            return (
                arr.map(value => {
                    return (
                        <div key={value.id}>
                            <div className="section flow-text">
                                <span>{value.title}</span>
                                <span className="right">{value.price} руб.</span>
                            </div>
                            <div className="divider"></div>
                        </div>
                    )
                })
            )
        }
    }

    render() {
        const {serviceList} = this.state;

        if (!serviceList) {
            return (
                <div className="progress">
                    <div className="indeterminate"></div>
                </div>
            )
        }

        return (
            <ul className="collection">
                {this.renderItems(serviceList)}
            </ul>
        )
    }
}