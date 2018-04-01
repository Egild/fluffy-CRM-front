import React from 'react';
import {observable} from 'mobx';
import {observer} from 'mobx-react';

import cn from 'classnames';

@observer
export default class SearchService extends React.Component{
    @observable serviceSearch;

    render(){
        const {appStateStore, workStore} = this.props;
        const searchListClass = cn("search-list", {'active': appStateStore.search.service.show});
        const searchServices = workStore.serviceSearch.map( (searchItem) =>
            <div className="search-list-item"
                 key={searchItem.id}
                 onClick={() => this.chooseService(searchItem)}
            >
                {searchItem.title}
            </div>);

        return (
            <div className={searchListClass}>
                {searchServices}
            </div>
        );
    }
    chooseService(service){
        let query = "http://mbt-bs.com/whitefox/api/services";
        fetch(query)
            .then(response => {
                return response.json()
            })
            .then(data => {
                let resultService;
                data.forEach(function(item){
                    if (item.id === service.id){
                        resultService = item;
                    }
                });
                this.props.workStore.setService(resultService);
                this.props.appStateStore.closeSearchService();
            });
    }
}