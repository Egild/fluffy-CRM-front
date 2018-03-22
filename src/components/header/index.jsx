import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {observable} from 'mobx';
import {observer} from 'mobx-react';

import Client from '../client-item/index.jsx';
import SearchList from '../search-list/index.jsx';
import classNames from 'classnames/bind';

let cx = classNames.bind();

@observer
class Header extends Component {
    @observable currentClient;
    @observable searchList;

    render(){
        const {appStateStore, clientStore} = this.props;
        let buttonClass = cx({
            btn: true,
            hidden: !appStateStore.client.addClientButton.show
        });
        return <div className="header">
            <div className="header-title">Поиск клиента:</div>
            <input className="search-input"
                   type="text"
                   ref="searchInput"
                   onChange={this.searchClients}
                   />
            <SearchList appStateStore={appStateStore} clientStore={clientStore}/>
            <div className={buttonClass} onClick={appStateStore.openAddClientForm}>
                Добавить Клиента
            </div>
            <Client appStateStore={appStateStore} clientStore={clientStore}></Client>
        </div>
    }

    searchClients = (event) => {
        event.preventDefault();

        let searchText = ReactDOM.findDOMNode(this.refs.searchInput).value;
        this.props.appStateStore.showAddClientButton();
        if (searchText.length > 0){
            this.props.appStateStore.openSearchList();
            let query = "http://mbt-bs.com/whitefox/api/customers?name=" + searchText;
            fetch(query)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    this.props.clientStore.setSearchList(data);
                    if (data.length === 0){
                        this.props.appStateStore.closeSearchList();
                        this.props.appStateStore.showAddClientButton();
                    } else {
                        this.props.appStateStore.hideAddClientButton();
                    }
                })
        } else {
            this.props.clientStore.setSearchList([]);
            this.props.appStateStore.closeSearchList();

        }
    }

}

export default Header;