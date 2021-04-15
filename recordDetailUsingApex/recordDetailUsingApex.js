import { LightningElement, wire } from 'lwc';
import getContactById from '@salesforce/apex/ContactControllerLWC.getContactById';

export default class RecordDetailUsingApex extends LightningElement {

    contactDetail = {};

    @wire(getContactById , {id : '0035g000003bvb9AAA'}) contact({error , data}){
        if(data){
            console.log("@@ "+JSON.stringify(data));
            this.contactDetail = data;
        } else {
            console.log("!! "+JSON.stringify(error));
        }
    }

}