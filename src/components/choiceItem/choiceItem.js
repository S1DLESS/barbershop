import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {deleteBarber, deleteService, deleteDate} from '../../redux/actions';
import './choiceItem.css';

class ChoiceItem extends Component {

    actionDeleteButton() {
        switch (this.props.url) {
            case 'barber': this.props.deleteBarber(); break
            case 'service': this.props.deleteService(); break
            case 'date': this.props.deleteDate(); break
            default: return
        }
    }

    renderDeleteButton() {
        if (this.props.descr) {
            return (
                <button className="del-btn-choiceitem"
                        onClick={() => this.actionDeleteButton()}>
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

const mapDispatchToProps = {
    deleteBarber,
    deleteService,
    deleteDate
}

export default connect(null, mapDispatchToProps)(ChoiceItem)