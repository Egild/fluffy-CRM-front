import Moment from 'moment';
import {observable, action} from 'mobx';

class DirectoryStore {
    @observable clients = {
        name: 'clients',
        choosen: {
            name: null,
            id: null
        },
        opened: false,
        list: []
    };

    @observable services = {
        name: 'services',
        choosen:  {
            name: null,
            id: null
        },
        opened: false,
        list: []
    };

    @observable date = "";

    constructor(){
        this.getClients();
        // this.getServices();
        // this.date = Moment(new Date()).format("DD.MM.YYYY");
    }

    @action getClients(){
        fetch('http://mbt-bs.com/whitefox/api/customers')
            .then(response => {
                return response.json();
            })
            .then(data => {
                this.clients.list = data;
                this.clients.choosen = data[0];
            });
    }

    @action getServices(){
        fetch('http://mbt-bs.com/whitefox/api/services')
            .then(response => {
                return response.json();
            })
            .then(data => {
                this.services.list = data;
                this.services.choosen = data[0];
            });
    }

    @action setChoosen(client, name){
        this[name].choosen = client;
    }

    @action closeList(name){
        this[name].opened = false;
    }

    @action setDate(date){
        this.date = date;
    }
}

const directoryStore = new DirectoryStore();
export default directoryStore;