import React, {Component} from 'react';
import {Provider} from 'mobx-react';



import './assets/styles/index.scss';

// components

import Header from './components/header/index.jsx';
import Footer from './components/footer/index.jsx';
import ClientForm from './components/client-form/index.jsx';

// stores
import ClientStore from './stores/ClientStore.js';
import SearchStore from './stores/SearchStore.js';

const stores = {ClientStore, SearchStore};

class App extends Component {
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
                        <Header />
                        <ClientForm client={this.state.currentClient}/>
                        <Footer />
                    </div>
                </Provider>

        )
    }
}

export default App;

