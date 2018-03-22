import React from 'react';
import {observable} from 'mobx';
import {observer} from 'mobx-react';

import cn from 'classnames';

@observer
export default class SearchList extends React.Component{
    @observable searchList;

    render(){
        const {appStateStore, clientStore} = this.props;
        const searchListClass = cn("search-list", {'active': appStateStore.search.list.show});
        const searchList = clientStore.searchList.map( (searchItem) =>
            <div className="search-list-item"
                 key={searchItem.id}
                 onClick={() => this.chooseClient(searchItem)}
            >
            {searchItem.name}
        </div>);

        return (
            <div className={searchListClass}>
                {searchList}
            </div>
        );
    }
    chooseClient(client){
        let query = "http://mbt-bs.com/whitefox/api/customer?id=" + client.id;
        fetch(query)
            .then(response => {
                return response.json()
            })
            .then(data => {
                this.props.clientStore.chooseClient(data);
                this.props.appStateStore.searchListToggle();
            });
    }
}