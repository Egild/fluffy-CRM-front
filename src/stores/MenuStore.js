import {observable, action} from 'mobx';

class MenuStore {
    @observable opened;

    constructor(){
        this.opened = false;
    }

    @action
    toggle(){
        this.opened = !this.opened;
    }
}

const menuStore = new MenuStore();
export default menuStore;
