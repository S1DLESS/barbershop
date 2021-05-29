import React, {Component} from 'react';
import DB from '../../service/service';


class OrderMain extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: {
                name: '',
                phone: '',
                email: '',
                comment: '',
                barberId: this.props.barber.id,
                serviceId: this.props.service.id,
                date: this.props.date
            },
            loading: false,
            error: false,
            isPosted: false
        }
    }

    db = new DB();

    changeHandler = e => {
        this.setState({data: {...this.state.data, [e.target.name]: e.target.value}})
        console.log(this.state)
    }

    responseHandler(res) {
        if (res.ok) {
            this.setState({...this.state, loading: false, isPosted: true})
        } else {
            this.setState({...this.state, loading: false, error: true})
        }
    }

    submitHandler = e => {
        e.preventDefault()
        if (this.state.data.name && this.state.data.phone) {
            this.setState({...this.state, loading: true})
            this.db.postData(this.state.data)
                .then(res => this.responseHandler(res))
        } else {
            alert('Заполните поля "Имя" и "Телефон"')
        }
    }

    render() {

        if (this.state.loading) {
            return (
                <div className="preloader-wrapper big active">
                    <div className="spinner-layer spinner-blue-only">
                    <div className="circle-clipper left">
                        <div className="circle"></div>
                    </div><div className="gap-patch">
                        <div className="circle"></div>
                    </div><div className="circle-clipper right">
                        <div className="circle"></div>
                    </div>
                    </div>
                </div>
            )
        }

        if (this.state.error) {
            return (
                <div>
                   <i className="large material-icons">close</i>
                    <h3>Ошибка!</h3>
                    <h4>Что-то пошло не так...</h4>
                </div>
            )
        }

        if (this.state.isPosted) {
            return (
                <div>
                    <i className="large material-icons">done</i>
                    <h3>Вы записаны!</h3>
                </div>
            )
        }

        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <label htmlFor="POST-name">Имя:</label>
                    <input id="POST-name"
                           value={this.state.data.name}
                           onChange={this.changeHandler}
                           name="name"/>
                    <label htmlFor="POST-phone">Телефон:</label>
                    <input id="POST-phone"
                           value={this.state.data.phone}
                           onChange={this.changeHandler}
                           name="phone"/>
                    <label htmlFor="POST-email">E-mail:</label>
                    <input id="POST-email"
                           value={this.state.data.email}
                           onChange={this.changeHandler}
                           name="email"/>
                    <label htmlFor="POST-comment">Комментарий:</label>
                    <input id="POST-comment"
                           value={this.state.data.comment}
                           onChange={this.changeHandler}
                           name="comment"/>
                    <button className="btn center"
                            type="submit">Записаться</button>
                </form>
            </div>
        )
    }
}

export default OrderMain