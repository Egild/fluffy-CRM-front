import {observable, action} from 'mobx';

class SearchStore {
    @observable showSearch;

    @action('search toggle')
    searchToggle(){
        this.showSearch = !this.showSearch;
    }
}

export default new SearchStore();