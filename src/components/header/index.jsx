import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Client from '../client-item/index.jsx';

import classNames from 'classnames/bind';

let cx = classNames.bind();

class Header extends Component {
    constructor(){
        super();
        this.state = {
            clients: [],
            showAddToggle: false,
            showList: false,
            currentClient: null
        };
    }
    render(){
        let listClass = cx({
            "search-list": true,
            "active": this.state.showList
        });
        let buttonClass = cx({
            btn: true,
            hidden: !this.state.showAddToggle
        });
        return <div className="header">
            <div className="header-title">Поиск клиента:</div>
            <input className="search-input"
                   type="text"
                   ref="searchInput"
                   onChange={this.searchClients}
                   />
            <div className={listClass}>
                {this.state.clients}
            </div>
            <div className={buttonClass} onClick={this.openAddClientForm}>
                Добавить Клиента
            </div>
            <Client client={this.state.currentClient}></Client>
        </div>
    }

    searchClients = (event) => {
        event.preventDefault();
        let listState = (ReactDOM.findDOMNode(this.refs.searchInput).value.length > 0)?(true):(false);
        let searchText = ReactDOM.findDOMNode(this.refs.searchInput).value;
        let query = "http://mbt-bs.com/whitefox/api/customers?name=" + searchText;
        fetch(query)
            .then(response => {
                return response.json();
            })
            .then(data => {
                if (data.length > 0){
                    let clients = data.map((client)=>
                        <div className="search-list-item"
                             key={client.id}
                             onClick={() => this.choiseClient(client)}
                        >
                            {client.name}
                        </div>);
                    this.setState({clients: clients, showAddToggle: false, showList: listState});
                } else {
                    this.setState({clients:[], showAddToggle: true, showList: false});
                }
            });
    }
    choiseClient = (bufferClient) =>{
        let state = {...this.state};
        let query = "http://mbt-bs.com/whitefox/api/customer?id=" + bufferClient.id;
        fetch(query)
            .then(response => {
                return response.json()
            })
            .then(data => {
                let client = data;
                state.currentClient = client;
                state.showList = false;
                state.showAddToggle = false;
                this.setState(state)
            })


    }
    openAddClientForm = () =>{
        let newState = {...this.state};
        this.setState(newState);
    }
}

export default Header;