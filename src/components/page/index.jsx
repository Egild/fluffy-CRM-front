import React, {Component} from 'react';

import Header from '../header/index.jsx';
import ClientList from '../client-list/index.jsx';
import Footer from '../footer/index.jsx';

class Page extends Component{
    render(){
        return <div>
            <Header />
            <ClientList />
            <Footer />
        </div>
    }
}

export default Page;