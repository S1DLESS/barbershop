import React, {Component} from 'react';
import { connect } from 'react-redux';
import {deleteDate} from '../../../redux/actions';
import {Link} from 'react-router-dom';
import ChoiceItem from '../../choiceItem/choiceItem';
import './appointmentMainPage.css';

class AppointmentMainPage extends Component {

    
    
    renderInitButton() {
        if (this.props.barber && this.props.service && this.props.date) {
            return (
                <Link to='/appointment/order'>
                    <button className="btn">Оформить визит</button>
                </Link>
            )
        }
    }

    componentDidMount() {
        if (this.props.date && typeof(this.props.date) === 'object') {
            if (this.props.date.getHours() === 0) {
                this.props.deleteDate()
            }
        }
    }

    componentDidUpdate() {
        if (!this.props.barber || !this.props.service) {
            this.props.deleteDate()
        }
    }

    render() {

        const checkBarber = () => {
            if (this.props.barber !== null) {
                return this.props.barber.name
            } else {
                return ""
            }
        }

        const checkService = () => {
            if (this.props.service !== null) {
                return this.props.service.title
            } else {
                return ""
            }
        }

        const checkDate = () => {
            let day = new Date(this.props.date).getDate(),
                month = new Date(this.props.date).getMonth(),
                year = new Date(this.props.date).getFullYear(),
                hours = new Date(this.props.date).getHours(),
                minutes = new Date(this.props.date).getMinutes();
    
            if (day < 10) {
                day = `0${day}`
            }
                  
            if (minutes < 10) {
                minutes = `0${minutes}`
            }
    
            switch (month) {
                case 1: month = 'января'; break
                case 2: month = 'февраля'; break
                case 3: month = 'марта'; break
                case 4: month = 'апреля'; break
                case 5: month = 'мая'; break
                case 6: month = 'июня'; break
                case 7: month = 'июля'; break
                case 8: month = 'августа'; break
                case 9: month = 'сентября'; break
                case 10: month = 'октября'; break
                case 11: month = 'ноября'; break
                case 12: month = 'декабря'; break
                default: month = ''
            }
    
            if (this.props.date !== "") {
                return `${day} ${month} ${year} в ${hours}:${minutes}`
            } else {
                return ""
            }
        }

        return (
            <>
                <Link to="/" className="btn"><i className="material-icons left">arrow_back</i>Назад</Link>
                <div className="amp-container">
                    <h4 className="center-align">Онлайн-запись</h4>
                        <ChoiceItem url={"barber"} icon={"people"} title={"Барбер"} descr={checkBarber()}/>
                        <ChoiceItem url={"service"} icon={"content_cut"} title={"Услуга"} descr={checkService()}/>
                        {(this.props.barber && this.props.service)
                        ? <ChoiceItem url={"date"} icon={"date_range"} title={"Дата и время"} descr={checkDate()}/>
                        : null}
                    {this.renderInitButton()}
                </div>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        barber: state.selectedBarber,
        service: state.selectedService,
        date: state.selectedDate
    }
}

const mapDispatchToProps = {
    deleteDate
}

export default connect(mapStateToProps, mapDispatchToProps)(AppointmentMainPage)