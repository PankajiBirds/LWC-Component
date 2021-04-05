import { LightningElement } from 'lwc';

export default class RadioExample extends LightningElement {
    defaultGender = '';

    get gender(){
        return [
            {label : 'Male', value : 'male'},
            {label : 'Female', value : 'female'},
            {label : 'Other', value : 'other'},
        ]
    }

    changeHandler(event){
        this.defaultGender = event.detail.value;
    }

    get selectedGender(){
        return this.defaultGender == ''?'none':this.defaultGender
    }
}