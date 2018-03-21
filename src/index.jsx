import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'mobx-react';
import {
    Router,
    Route,
    IndexRoute,
    browserHistory
} from 'react-router';

import './assets/styles/index.scss';

// components

import Header from './components/header/index.jsx';
import Footer from './components/footer/index.jsx';
import ClientForm from './components/client-form/index.jsx';
import SideBarMenu from './components/side-bar-menu/index.jsx';

// stores
import clientStore from './stores/ClientStore.js';
import searchStore from './stores/SearchStore.js';
import menuStore from './stores/MenuStore.js';

const stores = {clientStore, searchStore, menuStore};


class App extends React.Component {
    constructor(){
        super();
        this.state = {
            currentClient: null
        }
    }
    render(){
        return (
                <Provider {...stores}>
                    <div className="page-wrapper">
                        <SideBarMenu menuStore={menuStore} />
                        <Header clientStore={clientStore}/>
                        <ClientForm clientStore={clientStore}/>
                        <Footer />
                    </div>
                </Provider>

        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById("app")
);
