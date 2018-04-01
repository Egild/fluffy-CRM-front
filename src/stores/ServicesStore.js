import {observable, action} from 'mobx';

class ServicesStore {
    @observable servises;
    @observable currentService;
    @observable bufferService = {
        id: null,
        title: null
    };

    @action createBufferService(service){
        let bufferService = {}
        if (service === undefined){
            bufferService = {
                id: null,
                title: ""
            }
        } else {
            for (let key in service){
                bufferService[key] = service[ket];
            }
        }
        this.bufferService = bufferService;
    }
    @action setServiceTitle(title){
        this.bufferService.title = title;
    }

    @action saveService(id, title){
        let service ={
            id: id,
            title: title
        };
        console.log(service);
        fetch("http://mbt-bs.com/whitefox/api/service",{
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Charset": "UTF-8"
            },
            body: JSON.stringify(service),
            mode: 'cors'
        }).then(
            response => response.json()
        ).then(
            data => console.log(data)
        )
    }
}

const servicesStore = new ServicesStore();
export default servicesStore;