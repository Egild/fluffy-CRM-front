import {observable} from 'mobx';

class AppStateStore {
    @observable state = {
        client: {
            viewMode: 'view'
        },
        works: {
            viewMode: 'view'

        }
    }

    constructor(){
        this.state = {
            client: {
                viewMode: 'view'
            },
            works: {
                viewMode: 'view'

            }
        }
    }
}

const appStateStore = new AppStateStore();
export default appStateStore;