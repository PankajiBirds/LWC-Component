import { LightningElement, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import USER_ID from '@salesforce/user/Id';

export default class UserDetailExample extends LightningElement {
    userId = USER_ID;
    userName;
    userObj = {};
    @wire(getRecord , {
        recordId : USER_ID ,
        fields : ['User.FirstName','User.LastName']
    }) userDetail ({error , data}){
        if(data){
            this.userObj = {
                LastName : data.fields.LastName.value
            };
            this.userName = data.fields.FirstName.value;            
            console.log("@@ : "+JSON.stringify(data));            
            console.log("-- : "+this.userName);
            console.log("&& : "+this.userObj.LastName);
        } else {
            console.log("## : "+error);
        }        
    };
}