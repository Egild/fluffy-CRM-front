import {observable, action} from 'mobx';

class ClientStore {
    @observable clients;
    @observable currentClient;
    @observable searchList;
    @observable bufferClient;

    constructor(){
        this.clients = [];
        this.searchList = [];
        this.currentClient = null;
        this.bufferClient = null;
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

    @action setWorks(works){
        this.currentClient.works = works;
    }

    @action setSearchList(searchList){
        this.searchList = searchList;
    }

    @action chooseClient(client){
        this.currentClient = client;
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
            client => this.chooseClient(client)
        )
    }

    @action setBufferClient(client){
        this.bufferClient = client;
    }

}
const clientStore = new ClientStore();
export default clientStore;