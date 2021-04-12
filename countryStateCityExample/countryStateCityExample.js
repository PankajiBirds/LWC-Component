import { LightningElement } from 'lwc';

export default class CountryStateCityExample extends LightningElement {

    data = [
        {
            "india" : {
                "rajasthan" : {
                    "ajmer" : "ajmer",
                    "jaipur" : "jaipur",
                    "kota" : "kota"
                },
                "mp" : {
                    "bhopal" : "bhopal",
                    "ujjain" : "ujjain",
                    "ratlam" : "ratlam"
                } 
            },
            "englend" : {
                "state1" : {
                    "city1" : "city1",
                    "city2" : "city2"
                }
            }
        }
    ];

    stateOptions;
    country = "";
    state = "";
    constructor(){
        super();
        console.log(this.data);
        console.log(this.data[0][this.country]);
    }

    get countryOptions(){
        var countryOptions = [];
        for(var country in this.data[0]){
            var obj = {};
            obj.label = country;
            obj.value = country;
            countryOptions.push(obj);
        }
        return countryOptions;
    }
    
    countryChange(event){
        this.stateOptions = [];         
        for(var stateValue in this.data[0][event.target.value]){            
            var obj = {};
            obj.label = stateValue;
            obj.value = stateValue;            
            this.stateOptions.push(obj);            
        }
    }
}