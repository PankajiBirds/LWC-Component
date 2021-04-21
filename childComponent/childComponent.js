import { LightningElement , api } from 'lwc';

export default class ChildComponent extends LightningElement {
    @api username;
    @api userId;

    @api 
    displayValue(data){
        console.log("data : ",JSON.stringify(data));
        this.userId = data.userid;
        this.username = data.username;
    }
}