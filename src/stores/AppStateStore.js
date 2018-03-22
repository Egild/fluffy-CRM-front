import {observable, action} from 'mobx';

class AppStateStore {
    @observable
    search = {
      list: {
          show: false
      }
    };

    @observable
    client = {
        addClientButton:{
          show: false
        },
        viewMode: "view"
    };

    @observable
    works = {
        viewMode: 'view'
    };



    @action searchListToggle(){
        this.search.list.show = !this.search.list.show;
    }

    @action closeSearchList(){
        this.search.list.show = false;
    }

    @action openSearchList(){
        this.search.list.show = true;
    }

    @action showAddClientButton(){
        this.client.addClientButton.show = true;
    }

    @action hideAddClientButton(){
        this.client.addClientButton.show = false;
    }

    @action openClientEditForm(){
        this.client.viewMode = "edit";
    }

    @action closeClientEditForm(){
        this.client.viewMode = "view";
    }
    // constructor(){
    //     this.state = {
    //         search: {
    //           list: {
    //               show: false
    //           }
    //         },
    //         client: {
    //             viewMode: 'view'
    //         },
    //         works: {
    //             viewMode: 'view'
    //
    //         }
    //     }
    // }
}

const appStateStore = new AppStateStore();
export default appStateStore;