import React from 'react';

import {observable} from 'mobx';
import {observer} from 'mobx-react';

export default class Works extends React.Component {


    render(){
        console.log("this.props", this.props);
        const {appStateStore, works} = this.props;

        const workList = works.map((work) => <div className="work">
            <div className="work-client">{work.customer.name}</div>
            <div className="work-service">{work.service.title}</div>
            <div className="work-date">{work.date}</div>
        </div>)
        return (

            <div className="work-list">
                <div className="work-list-title">Работы:</div>
                {workList}
            </div>
        )
    }
}