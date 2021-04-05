import { LightningElement } from 'lwc';

export default class CheckBoxExample extends LightningElement {

    defaultSelected = ['sleeping','playing']

    selectedHobbies = this.defaultSelected;

    get hobbies(){
        return [
            {label : "Playing",value : "playing"},
            {label : "Reading",value : "reading"},
            {label : "Sleeping",value : "sleeping"}
        ];
    }

    changeHandler(event){
        // console.log(event.detail.value);
        this.selectedHobbies = event.detail.value;
        console.log(this.selectedHobbies);
    }

}