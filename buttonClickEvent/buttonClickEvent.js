import { LightningElement } from 'lwc';

export default class ButtonClickEvent extends LightningElement {
    name = "Pankaj";
    nameValue;

    changeHandler(event){
        this.nameValue = event.target.value;
    }

    clickHandler(event){
        alert('Hello World');
        this.name = this.nameValue;        
    }
}