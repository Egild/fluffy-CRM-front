import React from 'react';
import {observable} from "mobx";
import {observer} from 'mobx-react';
import classNames from 'classnames/bind';

let cn = classNames.bind();

@observer
export default class EgSelect extends React.Component {
    @observable choosen;
    @observable opened;
    constructor(){
        super();
        this.opened = false;
    }

    render(){
        const {directory, directoryStore} = this.props;
        let choosen = this.props.directory.choosen;
        let selectInputStyles = "";
        const selectItems = directory.list.map((directoryItem) =>
            <div className="eg-select-list-item" key={directoryItem.id} onClick={() => this.chooseItem(directoryItem)}>{directoryItem.name}</div>);
        let list;
        selectInputStyles = cn({
            'eg-select-input': true,
            'opened': this.props.directory.opened
        })
        if (this.props.directory.opened === true){
            list = <div className="eg-select-list">
                {selectItems}
            </div>

        } else {
            list = null;
        }

        return (<div className="eg-select">
                <div className={selectInputStyles} onClick={this.selectToggle}>{choosen.name}</div>
                {list}
            </div>)
    }

    selectToggle = () => {
        this.props.directory.opened = !this.props.directory.opened;

    }

    chooseItem = (item) => {
        this.props.directoryStore.setChoosen(item, this.props.directory.name);
        this.props.directoryStore.closeList(this.props.directory.name);
    }
}