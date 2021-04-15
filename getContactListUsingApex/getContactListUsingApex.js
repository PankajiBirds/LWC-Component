import { LightningElement, wire } from 'lwc';
import getContactList from '@salesforce/apex/ContactControllerLWC.getContactList';
import accountList from '@salesforce/apex/ContactControllerLWC.accountList';

export default class GetContactListUsingApex extends LightningElement {
    
    contacts;

    accounts;
    //  Way 1

    //  @wire(getContactList) contactList;


    //  Way 2

    @wire(getContactList) contactList({error , data}){
        if(data){
            this.contacts = data;
            //  console.log("@@ : "+JSON.stringify(data));
        } else {
            //  console.log("!! : "+JSON.stringify(error));
        }
    }

    handleGetAccount(){
        accountList().then(result => {
            console.log("@@ : "+JSON.stringify(result));
            this.accounts = result;
        }).catch(error => {
            console.log("!! : "+JSON.stringify(error));
        });
    }
}