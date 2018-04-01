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
import ClientForm from './components/client-form/index.jsx';

// stores
import appStateStore from './stores/AppStateStore.js';
import clientStore from './stores/ClientStore.js';
import directoryStore from "./stores/DirectoryStore.js";
import servicesStore from "./stores/ServicesStore.js";
import workStore from "./stores/WorkStore.js";
import ServicesForm from "./components/service-form/index.jsx";

const stores = {appStateStore, clientStore, servicesStore, workStore, directoryStore};


class App extends React.Component {
    render(){
        return (
                <Provider {...stores}>
                    <div className="page-wrapper">
                        <Header appStateStore={appStateStore} clientStore={clientStore} servicesStore={servicesStore} workStore={workStore} directoryStore={directoryStore} />
                        <ClientForm appStateStore={appStateStore} clientStore={clientStore}/>
                        <ServicesForm appStateStore={appStateStore} servicesStore={servicesStore} workStore={workStore}/>
                    </div>
                </Provider>

        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById("app")
);
