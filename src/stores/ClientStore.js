import {observable, action, autorun} from 'mobx';
import ClientModel from '../models/client-model.js';

class ClientStore {
    @observable clients;
    @observable currentClient;

    constructor(){
        this.clients = [];
        this.currentClient = null;
        autorun(() => this.getClients());
    }
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

    @action chooseClient(client){
        this.currentClient = client;
    }

    @action setName(name){
        this.currentClient.name = name;
    }

    @action setPhone(phone){
        this.currentClient.phone = phone;
    }

    @action setEmail(email){
        this.currentClient.email = email;
    }

    @action setBirthDate(birthDate){
        this.currentClient.birthDate = birthDate;
    }

    @action setComment(comment){
        this.currentClient.comment = comment;
    }

    @action saveClient(client){
        fetch('http://mbt-bs.com/whitefox/api/customer', {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(client),
            mode: 'cors'
        }).then(
            response => response.json()
        ).then(
            data => console.log(data)
        )
    }

}
const clientStore = new ClientStore();
export default clientStore;