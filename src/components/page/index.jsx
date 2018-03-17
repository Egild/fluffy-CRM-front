import React, {Component} from 'react';

import Header from '../header/index.jsx';
import ClientForm from '../client-form/index.jsx';
import Footer from '../footer/index.jsx';

class Page extends Component{
    render(){
        return <div>
            <Header />
            <ClientForm />
            <Footer />
        </div>
    }
}

export default Page;