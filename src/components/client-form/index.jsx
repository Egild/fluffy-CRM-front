import React, {Component} from 'react';

class ClientForm extends Component{

    render(){
        console.log(this.props);
        if (this.props.client !== null){
            return (
                <div className="clientForm">
                    <div className="clientForm-field">
                        <div className="clientForm-field-label">Имя</div>
                        <div className="clientForm-field-input">
                            <input type="text" value={this.props.client.name}/>
                        </div>
                    </div>
                    <div className="clientForm-field">
                        <div className="clientForm-field-label">Телефон</div>
                        <div className="clientForm-field-input">
                            <input type="text" value={this.props.client.phone}/>
                        </div>
                    </div>
                    <div className="clientForm-field">
                        <div className="clientForm-field-label">E-mail</div>
                        <div className="clientForm-field-input">
                            <input type="text" value={this.props.client.email}/>
                        </div>
                    </div>
                    <div className="clientForm-field">
                        <div className="clientForm-field-label">Дата рождения</div>
                        <div className="clientForm-field-input">
                            <input type="text" value={this.props.client.birthDate}/>
                        </div>
                    </div>
                    <div className="clientForm-field">
                        <div className="clientForm-field-label">Комментарий</div>
                        <div className="clientForm-field-input">
                            <input type="text" value={this.props.client.comment}/>
                        </div>
                    </div>
                </div>
            )
        } else {
            return null;
        }

    }
}

export default ClientForm;
