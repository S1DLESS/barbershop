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
                barberId: this.props.barber.barberId,
                serviceId: this.props.service.serviceId,
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
                <div class="preloader-wrapper big active">
                    <div class="spinner-layer spinner-blue-only">
                    <div class="circle-clipper left">
                        <div class="circle"></div>
                    </div><div class="gap-patch">
                        <div class="circle"></div>
                    </div><div class="circle-clipper right">
                        <div class="circle"></div>
                    </div>
                    </div>
                </div>
            )
        }

        if (this.state.error) {
            return (
                <div>
                   <i class="large material-icons">close</i>
                    <h3>Ошибка!</h3>
                    <h4>Что-то пошло не так...</h4>
                </div>
            )
        }

        if (this.state.isPosted) {
            return (
                <div>
                    <i class="large material-icons">done</i>
                    <h3>Вы записаны!</h3>
                </div>
            )
        }

        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <label for="POST-name">Имя:</label>
                    <input id="POST-name"
                           value={this.state.data.name}
                           onChange={this.changeHandler}
                           name="name"/>
                    <label for="POST-phone">Телефон:</label>
                    <input id="POST-phone"
                           value={this.state.data.phone}
                           onChange={this.changeHandler}
                           name="phone"/>
                    <label for="POST-email">E-mail:</label>
                    <input id="POST-email"
                           value={this.state.data.email}
                           onChange={this.changeHandler}
                           name="email"/>
                    <label for="POST-comment">Комментарий:</label>
                    <input id="POST-comment"
                           value={this.state.data.comment}
                           onChange={this.changeHandler}
                           name="comment"/>
                    <button className="btn"
                            type="submit">Записаться</button>
                </form>
            </div>
        )
    }
}

export default OrderMain