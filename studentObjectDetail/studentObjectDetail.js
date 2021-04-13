import { LightningElement , api, wire } from 'lwc';
import { getRecord }from 'lightning/uiRecordApi';

export default class StudentObjectDetail extends LightningElement {
    @api recordId;
    studentData = {};

    @wire(getRecord , {
        recordId : '$recordId',
        fields : ['Student__c.Name','Student__c.Last_Name__c','Student__c.Email__c']
    }) details({error , data}){
        if(data){
            this.studentData = {
                Name : data.fields.Name.value,
                LastName : data.fields.Last_Name__c.value,
                Email : data.fields.Email__c.value,
            }
            console.log("@@ : "+JSON.stringify(data));
        } else {
            console.log("## : "+error);
        }
    };

}