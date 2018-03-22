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

// stores
import clientStore from './stores/ClientStore.js';
import searchStore from './stores/SearchStore.js';
import appStateStore from './stores/AppStateStore.js';

const stores = {clientStore, searchStore, appStateStore};


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
                        <Header appStateStore={appStateStore} clientStore={clientStore}/>
                        <ClientForm appStateStore={appStateStore} clientStore={clientStore}/>
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
