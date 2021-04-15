import { LightningElement } from 'lwc';
import save from '@salesforce/apex/ContactControllerLWC.save';

export default class CreateNewStudent extends LightningElement {

    student = {
        Name : '',
        Last_Name__c : 'Sharma',
        Contact__c : ''
    }

    handleName(event){
        this.student.Name = event.target.value;
    }

    handleLastName(event){
        this.student.Last_Name__c = event.target.value;
    }

    handleContact(event){
        this.student.Contact__c = event.target.value;
    }

    handleSave(){
        save({student : this.student}).then(result => {
            console.log("New record id : "+result.Id);
            this.student = {
                Name : '',
                Last_Name__c : 'Sharma',
                Contact__c : ''
            }
        }).catch(error => {
            console.log("!! : "+JSON.stringify(error));
        });
    }
}