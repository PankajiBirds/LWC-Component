import { LightningElement, wire } from 'lwc';
import { registerListener, unregisterAllListeners, fireEvent } from 'c/pubSub';
import { CurrentPageReference } from 'lightning/navigation'; 

export default class MySubscribe extends LightningElement {

    @wire(CurrentPageReference) pageRef;

    message;
    user = {};

    connectedCallback(){
        registerListener("showMessage",this.showMessage,this);
        registerListener("showUserDetail",this.showUserDetail,this);
    }

    showMessage(message){
        this.message = message;
    }

    showUserDetail(data){
        this.user = data;
    }

    handleSendBack(){        
        fireEvent(this.pageRef,"receiveData","Hello I'm Back");
    }

    disconnectedCallback(){
        unregisterAllListeners(this);
    }
}