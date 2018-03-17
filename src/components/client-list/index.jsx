import React, {Component} from 'react';
import ClientStore from '../../stores/ClientStore.js';


class ClientList extends Component {
    constructor(){
        super();
        this.state = {
            clients: [

            ]
        };
    }
    componentDidMount(){
         fetch('http://mbt-bs.com/whitefox/api/customers')
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
                let clients = data.map((client)=><div className="client-list-item" key={client.id}>{client.name}</div>);
                this.setState({clients: clients});
            });
    }
    render(){
        return <div className="client-list">
            {this.state.clients}
            Тут будет выводиться список клиентов
        </div>
    }

}

export default ClientList;