import React, {Component} from 'react';
import {observable} from 'mobx';
import {observer} from 'mobx-react';

@observer
class ClientForm extends Component{
    @observable bufferClient;


    render(){
        const {appStateStore, clientStore} = this.props;
        if (clientStore.bufferClient !== null && (appStateStore.client.viewMode === 'edit' || appStateStore.client.viewMode === 'create')){
            let editButtonText = "Сохранить";
            return (
                <div className="client-form">
                    <div className="client-form-title">Измените данные о клиенте</div>
                    <div className="field">
                        <div className="field-label">ФИО</div>
                        <div className="field-input">
                            <input type="text"
                                   ref="name"
                                   value={this.props.clientStore.bufferClient.name}
                                   onChange={() => this.setName("name")}
                            />
                        </div>
                    </div>
                    <div className="field">
                        <div className="field-label">Телефон</div>
                        <div className="field-input">
                            <input type="text"
                                   ref="phone"
                                   value={this.props.clientStore.bufferClient.phone}
                                   onChange={()=> this.setPhone("phone")}
                            />
                        </div>
                    </div>
                    <div className="field">
                        <div className="field-label">E-mail</div>
                        <div className="field-input">
                            <input type="text"
                                   ref="email"
                                   value={this.props.clientStore.bufferClient.email}
                                   onChange={()=> this.setEmail("email")}
                            />
                        </div>
                    </div>
                    <div className="field">
                        <div className="field-label">Дата рождения</div>
                        <div className="field-input">
                            <input type="text"
                                   ref="birthDate"
                                   value={this.props.clientStore.bufferClient.birthDate}
                                   onChange={()=> this.setBirthDate("birthDate")}
                            />
                        </div>
                    </div>
                    <div className="field">
                        <div className="field-label">Комментарий</div>
                        <div className="field-input">
                            <input type="text"
                                   ref="comment"
                                   value={this.props.clientStore.bufferClient.comment}
                                   onChange={()=> this.setComment("comment")}
                            />
                        </div>
                    </div>
                    <div className="btn"
                         onClick={this.saveClient}
                    >{editButtonText}</div>
                    <div className="btn cancel"
                         onClick={this.closeForm}
                    >Закрыть</div>
                </div>
            )
        } else {
            return null;
        }

    }

    setName = (href) => {
        this.props.clientStore.setName(this.refs[href].value);
    };

    setPhone = (href) => {
        this.props.clientStore.setPhone(this.refs[href].value);
    };

    setBirthDate = (href) => {
        this.props.clientStore.setBirthDate(this.refs[href].value);
    };

    setEmail = (href) => {
        this.props.clientStore.setEmail(this.refs[href].value);
    };

    setComment = (href) => {
        this.props.clientStore.setComment(this.refs[href].value);
    };

    saveClient = () => {
        this.props.clientStore.saveClient(this.props.clientStore.bufferClient);
        this.props.appStateStore.closeClientEditForm();
    };

    closeForm = () => {
        this.props.appStateStore.closeClientEditForm();
    };


}

export default ClientForm;
