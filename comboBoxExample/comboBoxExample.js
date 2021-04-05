import { LightningElement } from 'lwc';

export default class ComboBoxExample extends LightningElement {

    defaultCity = '305002';

    get cities(){
        return [
            {label : "Ajmer", value : '305001'},
            {label : "Jaipur", value : '305003'},
            {label : "Kota", value : '305002'},
            {label : "Bikaner", value : '305007'},
            {label : "Alwar", value : '305009'},
        ]
    }

    changeHandler(event){
        this.defaultCity = event.target.value;
    }

    get selectedCity(){
        return this.defaultCity == ''?'none':this.defaultCity
    }
}