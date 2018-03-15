import { observable, action, autorun } from 'mobx';

class SearchStore {
    @observable search;
    constructor(){
        this.search = '';
    }

    @action ("change search request")
    changeSearchModel(string){
        this.search = string;
    }


}

const searchStore = new SearchStore();

autorun(()=>{
    console.log(searchStore);
});

export default searchStore;
export { SearchStore };

