import { LightningElement , wire } from 'lwc';
import { getListUi } from 'lightning/uiListApi';
import STUDENT_OBJ from '@salesforce/schema/Student__c';

export default class ObjectListExample extends LightningElement {

    studentData;

    // @wire(getListUi , {
    //     objectApiName : STUDENT_OBJ , 
    //     listViewApiName : "All"
    // }) studentList({error , data}){
    //     if(data){
    //         this.studentData = data.records.records;
    //         // console.log("$$ : "+JSON.stringify(this.studentData));
    //         // console.log("@@ : "+JSON.stringify(data));
            
    //         //console.log("Name : "+data.records.records[0].fields.Name.value);            
    //     } else {
    //         console.log("## : "+error);
    //     }
    // };

    // 00B5g000007fF3bEAE

    @wire(getListUi , {
        listViewId : '00B5g000007fF3bEAE'
    }) studentList({error , data}){
        if(data){
            this.studentData = data.records.records;
            // console.log("$$ : "+JSON.stringify(this.studentData));
            // console.log("@@ : "+JSON.stringify(data));
            
            //console.log("Name : "+data.records.records[0].fields.Name.value);            
        } else {
            console.log("## : "+error);
        }
    };
}