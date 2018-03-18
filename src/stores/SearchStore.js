import {observable, action} from 'mobx';

export default class SearchStore {
    @observable showSearch;

    @action('search toggle')
    toggle(){
        this.showSearch = !this.showSearch;
    }

    @action('close search')
    closeSearch(){
        this.showSearch = false;
    }

    @action('open search')
    openSearch(){
        this.showSearch = true;
    }
}
