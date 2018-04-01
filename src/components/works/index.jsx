import React from 'react';
import {observable} from 'mobx';
import {observer} from 'mobx-react';

import classNames from 'classnames/bind';

let cx = classNames.bind();
@observer
export default class Works extends React.Component {
    render(){
        const {appStateStore, works} = this.props;

        const workList = works.map((work) => <div className="work-list-item" key={work.id}>
            <div className="work-list-item-client">
                <div className="work-list-item-client-title">Клиент:</div>
                <div className="work-list-item-client-value">{work.customer.name}</div>
            </div>
            <div className="work-list-item-service">
                <div className="work-list-item-service-title">Услуга:</div>
                <div className="work-list-item-service-value">{work.service.title}</div>
            </div>
            <div className="work-list-item-date">
                <div className="work-list-item-date-title">Дата:</div>
                <div className="work-list-item-date-value">{work.date}</div>
            </div>
        </div>);
        return (<div>
            <div className="work-list-title">Работы:</div>
            <div className="work-list">
                {workList}
                <div className="btn" onClick={this.openWorkForm}>Добавить</div>
            </div>
        </div>
        )
    }

    openWorkForm = () => {
        this.props.appStateStore.openWorkEditForm();
    }
}