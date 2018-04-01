import React, {Component} from 'react';
import {observable} from 'mobx';
import {observer} from 'mobx-react';

import Works from '../works/index.jsx';
import WorkForm from "../work-form/index.jsx";


@observer
class Client extends Component{
    @observable currentClient;

    render(){
        const { appStateStore, clientStore, servicesStore, workStore, directoryStore} = this.props;

        if (appStateStore.client.viewMode === "view" && clientStore.currentClient !== null){
            return <div className="client">
                <div className="client-header">
                    <div className="client-title">Карточка Клиента</div>
                    <div className="btn" onClick={this.editClient}>Редактировать</div>
                </div>
                <div className="client-label">ФИО:</div>
                <div className="client-name">
                    {clientStore.currentClient.name}
                </div>
                <div className="client-label">Телефон:</div>
                <div className="client-phone">
                    {clientStore.currentClient.phone}
                </div>
                <div className="client-label">День рождения:</div>
                <div className="client-birthDate">
                    {clientStore.currentClient.birthDate}
                </div>
                <div className="client-label">E-mail:</div>
                <div className="client-email">
                    {clientStore.currentClient.email}
                </div>
                <div className="client-label">Комментарий</div>
                <div className="client-comment">
                    {clientStore.currentClient.comment}
                </div>
                <Works appStateStore={appStateStore} works={clientStore.currentClient.workList}/>
                <WorkForm appStateStore={appStateStore} clientStore={clientStore} servicesStore={servicesStore} workStore={workStore} directoryStore={directoryStore}/>
            </div>
        } else {
            return null
        }
    }

    editClient = () =>{
        this.props.clientStore.setBufferClient(this.props.clientStore.currentClient);
        this.props.appStateStore.openClientEditForm('edit');
    }
}

export default Client;