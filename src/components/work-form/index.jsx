import React from 'react';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import SearchClient from "../search-cilent/index.jsx";
import SearchService from "../search-service/index.jsx";

@observer
export default class WorkForm extends React.Component {
    @observable bufferWork;

    render(){
        const {appStateStore, clientStore, workStore, directoryStore} = this.props;

        if (appStateStore.works.viewMode === 'edit'){
            return (<div className="work-form">
                <div className="work-form-title">Введите данные о работе</div>
                <div className="field">
                    <div className="field-label">Клиент:</div>
                    <div className="field-input">
                        <input type="text"
                               ref="client"
                               value={this.props.workStore.bufferWork.customer.name}
                               onChange={() => this.changeClient('client')}/>
                    </div>
                    <SearchClient appStateStore={appStateStore} workStore={workStore}/>
                </div>
                <div className="field">
                    <div className="field-label">Услуга:</div>
                    <div className="field-input">
                        <input type="text"
                               ref="service"
                               value={this.props.workStore.bufferWork.service.title}
                               onChange={() => this.changeService('service')}
                        />
                    </div>
                    <SearchService appStateStore={appStateStore} workStore={workStore}/>
                    <div className="btn" onClick={this.openServiceForm}>Добавить услугу</div>
                </div>
                <div className="field">
                    <div className="field-label">Дата:</div>
                    <div className="field-input">
                        <input type="text"
                               value={this.props.workStore.bufferWork.date}
                               ref="date"
                               onChange={()=> this.changeDate("date")}
                        />
                    </div>
                </div>
                <div className="btn-wrapper">
                    <div className="btn" onClick={this.saveWork}>Добавить</div>
                    <div className="btn cancel" onClick={this.closeForm}>Закрыть</div>
                </div>
            </div>)
        } else {
            return null
        }
    };

    saveWork = () => {
        let customer = {
            id: this.props.workStore.bufferWork.customer.id
        };
        let service = {
            id: this.props.workStore.bufferWork.service.id
        };

        let date = this.props.workStore.bufferWork.date;

        this.props.workStore.saveWork(customer, service, date);
        this.props.appStateStore.closeWorkEditForm();
    };

    changeClient = (href) => {
        let clientText = this.refs[href].value;
        if (clientText.length > 0){
            let query = "http://mbt-bs.com/whitefox/api/customers?name=" + clientText;
            fetch(query)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    this.props.workStore.setClientSearch(data);
                    if (data.length === 0){
                        this.props.appStateStore.closeSearchClient();
                    } else {
                        this.props.appStateStore.openSearchClient();
                    }
                })
        }
    };

    changeService = (href) => {
        let serviceText = this.refs[href].value;
        if (serviceText.length > 0){
            let query = "http://mbt-bs.com/whitefox/api/services?title=" + serviceText;
            fetch(query)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    this.props.workStore.setServiceSearch(data);
                    if (data.length === 0){
                        this.props.appStateStore.closeSearchService();
                    } else {
                        this.props.appStateStore.openSearchService();
                    }
                })
        }
    };

    changeDate = (href) => {
        this.props.directoryStore.setDate(this.refs[href].value);
    };

    closeForm = () => {
        this.props.appStateStore.closeWorkEditForm();
    };

    openServiceForm = () => {
        this.props.servicesStore.createBufferService();
        this.props.appStateStore.openServiceForm();
    }
}