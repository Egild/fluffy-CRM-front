import React from 'react';
import {observable} from 'mobx';
import {observer} from 'mobx-react';

import cn from 'classnames';

@observer
export default class SearchClient extends React.Component{
    @observable searchClient;

    render(){
        const {appStateStore, workStore} = this.props;
        const searchListClass = cn("search-list", {'active': appStateStore.search.client.show});
        const searchClients = workStore.clientSearch.map( (searchItem) =>
            <div className="search-list-item"
                 key={searchItem.id}
                 onClick={() => this.chooseClient(searchItem)}
            >
                {searchItem.name}
            </div>);

        return (
            <div className={searchListClass}>
                {searchClients}
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
                this.props.workStore.setCustomer(data);
                this.props.appStateStore.closeSearchClient();
            });
    }
}