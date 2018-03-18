import {observable} from 'mobx';

export default class ClientModel{
    store;
    id;
    @observable name;
    @observable birthDate;
    @observable comment;
    @observable phone;
    @observable email;
    @observable workList;

    constructor(store, client){
        this.store = store;
        this.id = client.id;
        this.name = client.name;
        this.birthDate = client.birthDate;
        this.comment = client.comment;
        this.phone = client.phone;
        this.email = client.email;
        this.workList = client.workList;
    }

    setName(name){
        this.name = name;
    }

    setBirthDate(birthDate){
        this.birthDate = birthDate;
    }

    setComment(comment){
        this.comment = comment;
    }

    setPhone(phone){
        this.phone = phone;
    }

    setEmail(email){
        this.email = email;
    }

    setWorkList(workList){
        this.workList = workList;
    }


    toJS(){
        return {
            id: this.id,
            name: this.name,
            birthDate: this.birthDate,
            comment: this.comment,
            phone: this.phone,
            email: this.email,
            workList: this.workList
        }
    }

    static fromJS(store, client){
        return newClientModel(store, )
    }
}