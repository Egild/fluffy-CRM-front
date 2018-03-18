import {observable, action, autorun} from 'mobx';
import ClientModel from '../models/client-model.js';

class ClientStore {
    @observable clients = [];

    addClient(client){
        this.clients.push(new ClientModel(this, client));
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

    @action putClients(clients){
        let clientArray = [];
        clients.forEach(client => {
            clientArray.push = (new ClientStore(client));
        });
        this.clients = clientArray;
    }

}

export default new ClientStore();
export {ClientStore};