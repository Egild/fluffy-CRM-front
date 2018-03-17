import React, {Component} from 'react';

class Client extends Component{
    render(){
        console.log(this.props.client);
        if (this.props.client !== null){
            return <div className="client">
                <div className="client-title">Карточка Клиента</div>
                <div className="client-label">ФИО:</div>
                <div className="client-name">
                    {this.props.client.name}
                </div>
                <div className="client-label">Телефон:</div>
                <div className="client-phone">
                    {this.props.client.phone}
                </div>
                <div className="client-label">День рождения:</div>
                <div className="client-birthDate">
                    {this.props.client.birthDate}
                </div>
                <div className="client-label">E-mail:</div>
                <div className="client-email">
                    {this.props.client.email}
                </div>
                <div className="client-label">Комментарий</div>
                <div className="client-comment">
                    {this.props.client.comment}
                </div>
            </div>
        } else {
            return null
        }
    }
}

export default Client;