import { LightningElement } from 'lwc';

export default class ParentComponentExample extends LightningElement {

    id;
    name;

    studentData = {};

    handleSimpleEvent(event){
        console.log("data : ",JSON.stringify(event.detail));
        this.id = event.detail.id;
        this.name = event.detail.name;
        this.studentData = {
            email : event.detail.email,
            contact : event.detail.contact
        };
    }
}