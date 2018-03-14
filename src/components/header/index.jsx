import React, {Component} from 'react';

class Header extends Component {
    render(){
        return <div className="header">
            <div className="header-title">Поиск клиента:</div>
            <input type="text" className="search-input"/>
            <div className="search-list active">
                <div className="search-list-item">hello</div>
                <div className="search-list-item">index</div>
                <div className="search-list-item">html</div>
                <div className="search-list-item">tuta budet</div>
                <div className="search-list-item">client list</div>
            </div>
        </div>
    }
}

export default Header;