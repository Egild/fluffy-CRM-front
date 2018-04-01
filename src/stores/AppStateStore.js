import {observable, action} from 'mobx';

class AppStateStore {
    @observable
    search = {
        list: {
            show: false
        },
        client: {
            show: false
        },
        service: {
            show: false
        }
    };

    @observable
    client = {
        viewMode: "view"
    };

    @observable
    works = {
        viewMode: 'view'
    };

    @observable
    services = {
        viewMode: 'view'
    };

    @action searchListToggle() {
        this.search.list.show = !this.search.list.show;
    }

    @action openSearchClient() {
        this.search.client.show = true;
    }

    @action closeSearchClient() {
        this.search.client.show = false;
    }

    @action openSearchService() {
        this.search.service.show = true;
    }

    @action closeSearchService() {
        this.search.service.show = false;
    }

    @action closeSearchList() {
        this.search.list.show = false;
    }

    @action openSearchList() {
        this.search.list.show = true;
    }

    @action openClientEditForm(mode) {
        this.client.viewMode = mode;
    }

    @action closeClientEditForm() {
        this.client.viewMode = "view";
    }

    @action openServiceForm(){
        this.services.viewMode = 'edit';
    }

    @action closeServiceForm(){
        this.services.viewMode = 'view';
    }


    @action openWorkEditForm() {
        this.works.viewMode = 'edit';
    }

    @action closeWorkEditForm() {
        this.works.viewMode = 'view';
    }
}

const appStateStore = new AppStateStore();
export default appStateStore;
