import {observable, action, autorun} from 'mobx';

class ClientStore {
    @observable clients;

    constructor(){
        this.clients = [];
    }

    @action("fetch request for clients")
    getClients(){
        fetch('http://mbt-bs.com/whitefox/api/customers')
            .then(response => {
                return response.json();
            })
            .then(data => {
                this.clients = data;
            });
    }

}

export default new ClientStore();
export {ClientStore};