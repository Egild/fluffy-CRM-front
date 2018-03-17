import React, {Component} from 'react';
import {Provider} from 'mobx-react';



import './assets/styles/index.scss';

// components

import Header from './components/header/index.jsx';
import Footer from './components/footer/index.jsx';
import ClientList from './components/client-list/index.jsx';

// stores
import ClientStore from './stores/ClientStore.js';
import SearchStore from './stores/SearchStore.js';

const stores = {ClientStore, SearchStore};

class App extends Component {
    render(){
        return (
                <Provider {...stores}>
                    <div className="page-wrapper">
                        <Header />
                        <ClientList />
                        <Footer />
                    </div>
                </Provider>

        )
    }
}

export default App;

