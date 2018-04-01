import {observable, action} from 'mobx';
import Moment from 'moment';

class WorkStore {
    @observable bufferWork = {
        id: null,
        customer: {
            id: null
        },
        service: {
            id: null
        },
        date: Moment(new Date()).format("DD.MM.YYYY")
    };

    @action createNewWork(){
        this.bufferWork = {
            id: null,
            customer: {
                id: null
            },
            service: {
                id: null
            },
            date: Moment(new Date()).format("DD.MM.YYYY")
        }
    }

    @observable clientSearch;
    @observable serviceSearch;

    constructor(){
        this.clientSearch = [];
        this.serviceSearch = [];

    }

    @action setCustomer(customer){
        this.bufferWork.customer = customer;
    }

    @action setService(service){
        this.bufferWork.service = service;
    }

    @action setDate(date){
        this.bufferWork.date = date;
    }

    @action saveWork(customer, service, date){
        let work = {
            id: null,
            customer: customer,
            service: service,
            date: date
        };
        fetch('http://mbt-bs.com/whitefox/api/work', {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(work),
            mode: 'cors'
        }).then(
            response => response.json()
        ).then(
            data => console.log(data)
        )
    }

    @action setClientSearch(clients){
        this.clientSearch = clients;
    }

    @action setServiceSearch(services){
        this.serviceSearch = services;
    }
}

const workStore = new WorkStore();
export default workStore;