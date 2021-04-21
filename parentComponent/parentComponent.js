import { LightningElement } from 'lwc';

export default class ParentComponent extends LightningElement {
    username = "Ankita Sharma";

    handleSend(event){
        const userId = this.template.querySelector(".userId").value;
        const userName = this.template.querySelector(".userName").value;

        console.log(userId , userName);

        const details = {
            userid : userId,
            username : userName
        };

        console.log("details : ",details);

        this.template.querySelector("c-child-component").displayValue(details);        
    }
}