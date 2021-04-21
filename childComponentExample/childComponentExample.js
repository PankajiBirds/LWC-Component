import { LightningElement } from 'lwc';

export default class ChildComponentExample extends LightningElement {
    handleSendToParent(){

        const studentData = this.template.querySelectorAll(".student");
    
        const studentObject = {
            id : studentData[0].value,
            name : studentData[1].value,
            email : studentData[2].value,
            contact : studentData[3].value
        };

        const customEvent = CustomEvent('simpleevent',{
            detail : studentObject
        });

        this.dispatchEvent(customEvent);
    }
}