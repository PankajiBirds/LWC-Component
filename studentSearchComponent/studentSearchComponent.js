import { LightningElement } from 'lwc';
import getFillterStudent from '@salesforce/apex/ContactControllerLWC.getFillterStudent';

export default class StudentSearchComponent extends LightningElement {

    name;

    studentList;

    handleName(event){
        this.name = event.target.value;
    }

    handleSearch(){
        getFillterStudent({name : this.name}).then(result => {
            console.log("@@ : "+JSON.stringify(result));
            this.studentList = result;
        }).catch(error => {
            console.log("!! : "+JSON.stringify(error));
        });
    }
}