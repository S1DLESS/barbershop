import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './header.css';


export default class Header extends Component {

    constructor(props){
        super(props)
        this.state = {anchor: ''};
        this.handleClick = this.handleClick.bind(this);
    }
    static defaultProps = {};
    static propTypes = {};
    handleClick(anchor){
        this.setState({
           anchor: anchor,
        })
    }
    AnchorScorll(){
        const {anchor} = this.state
        if(anchor){
           let anchorEle = document.getElementById(anchor)
           anchorEle.scrollIntoView({behavior: 'smooth'});
        }
    }

    render() {
        this.AnchorScorll()
        return (
            <nav>
                <div className="nav-wrapper brown">
                    <a href="/" className="brand-logo">Barbershop</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li onClick={()=>{this.handleClick("services")}}><a>Услуги</a></li>
                        <li onClick={()=>{this.handleClick("barbers")}}><a>Барберы</a></li>
                        <li onClick={()=>{this.handleClick("articles")}}><a>Статьи</a></li>
                        <li onClick={()=>{this.handleClick("news")}}><a>Новости</a></li>
                        <li onClick={()=>{this.handleClick("contacts")}}><a>Контакты</a></li>
                        <li><Link to='/appointment' className="btn-large black">Записаться</Link></li>
                    </ul>
                </div>
            </nav>
        )
    }
}