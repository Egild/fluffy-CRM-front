import React, {Component} from 'react';
import {observable} from 'mobx';
import {observer} from 'mobx-react';

@observer
class ServicesForm extends Component{
    @observable viewMode;


    render(){
        const {appStateStore, servicesStore, workStore} = this.props;
        console.log(appStateStore.services.viewMode);
        console.log("appStateStore.services.viewMode", appStateStore.services.viewMode);
        if (appStateStore.services.viewMode === 'edit'){
            let editButtonText = "Сохранить";
            return (
                <div className="service-form">
                    <div className="field">
                        <div className="field-label">Название услуги:</div>
                        <div className="field-input">
                            <input type="text"
                                   ref="title"
                                   value={this.props.servicesStore.bufferService.title}
                                   onChange={() => this.setServiceTitle("title")}
                            />
                        </div>
                    </div>
                    <div className="btn"
                         onClick={this.saveService}
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

    setServiceTitle = (href) => {
        this.props.servicesStore.setServiceTitle(this.refs[href].value);
    };

    saveService = () => {
        this.props.servicesStore.saveService(this.props.servicesStore.bufferService.id, this.props.servicesStore.bufferService.title);
        this.props.appStateStore.closeServiceForm();
    };

    closeForm = () => {
        this.props.appStateStore.closeServiceForm();
    };


}

export default ServicesForm;
