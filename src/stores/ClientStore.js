import {observable, action} from 'mobx';

class ClientStore {
    @observable clients;
    @observable currentClient;
    @observable searchList;
    @observable bufferClient;

    constructor() {
        this.clients = [];
        this.searchList = [];
        this.currentClient = null;
        this.bufferClient = null;
    }

    addClient(client) {
        this.clients.push(new ClientModel(this, client));
    }

    @action getClients() {
        fetch('http://mbt-bs.com/whitefox/api/customers')
            .then(response => {
                return response.json();
            })
            .then(data => {
                this.clients = data;
            });
    }

    @action setName(name) {
        this.bufferClient.name = name;
    }

    @action setPhone(phone) {
        this.bufferClient.phone = phone;
    }

    @action setEmail(email) {
        this.bufferClient.email = email;
    }

    @action setBirthDate(birthDate) {
        this.bufferClient.birthDate = birthDate;
    }

    @action setComment(comment) {
        this.bufferClient.comment = comment;
    }

    @action setWorks(works) {
        this.bufferClient.works = works;
    }

    @action setSearchList(searchList) {
        this.searchList = searchList;
    }

    @action chooseClient(client) {
        this.currentClient = client;
    }

    @action saveClient(client) {
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

    @action setBufferClient(client) {
        let newBufferClient = {};
        for (let key in client) {
            newBufferClient[key] = client[key];
        }
        this.bufferClient = newBufferClient;
    }

    @action createNewClient() {
        let client = {
            id: null,
            birthDate: "",
            comment: "",
            email: "",
            name: "",
            phone: "",
            workList: []
        };
        this.bufferClient = client;
    }

    @action addWork(work){

    }

}

const clientStore = new ClientStore();
export default clientStore;