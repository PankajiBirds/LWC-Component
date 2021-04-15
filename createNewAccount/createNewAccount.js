import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import OBJECT_NAME from '@salesforce/schema/Account';

export default class CreateNewAccount extends LightningElement {

    account = {
        Name : '',
        AccountNumber : '',
        Email__c : ''
    };

    handleName(event){
        this.account.Name = event.target.value;
    }

    handleAccountNumber(event){
        this.account.AccountNumber = event.target.value;
    }

    handleEmail(event){
        this.account.Email__c = event.target.value;
    }

    handleCreateAccount(){
        
        var fields = {
            'Name' : this.account.Name,
            'AccountNumber' : this.account.AccountNumber,
            'Email__c' : this.account.Email__c
        }

        console.log('!! : '+fields);

        var objectRecordInfo = {apiName : OBJECT_NAME.objectApiName , fields}

        console.log('@@ : '+objectRecordInfo);

        createRecord(objectRecordInfo);

    }
}