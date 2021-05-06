import { LightningElement, wire } from 'lwc';
import { fireEvent , registerListener, unregisterAllListeners } from 'c/pubSub';
import { CurrentPageReference  } from 'lightning/navigation';

export default class MyPublisher extends LightningElement {

    @wire(CurrentPageReference ) pageRef;

    connectedCallback(){
        registerListener("receiveData",this.displayMessage,this);
    }

    displayMessage(message){
        alert(message);
    }

    handleClick(){
        fireEvent(this.pageRef,"showMessage","Hello All - Welcome to iBirds Software Services");
    }

    handleUserDetail(){
        var user = {
            name : 'Amit',
            email : 'amit.s@yahoo.com',
            phone : '7891089874',
            city : 'Ajmer'
        }
        fireEvent(this.pageRef,"showUserDetail",user);
    }

    disconnectedCallback(){
        unregisterAllListeners(this);
    }
}