import React from 'react';
import { Provider } from 'mobx-react';
import { useStrict } from 'mobx';



import './assets/styles/index.scss';

// components

import Header from './components/header/index.jsx';
import Footer from './components/footer/index.jsx';
import ClientList from './components/client-list/index.jsx';

// stores

import searchStore from './stores/search.js';
import clientStore from './stores/client.js';

useStrict(true);
const stores = {searchStore, clientStore};


const App = props => (
    <Provider {...stores}>
        <div className="page-wrapper">
            <Header />
            <div>{props}</div>
            <ClientList />
            <Footer />
        </div>
    </Provider>
);

export default App;

