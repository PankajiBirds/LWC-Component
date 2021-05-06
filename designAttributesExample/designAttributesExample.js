import { LightningElement, api } from 'lwc';

export default class DesignAttributesExample extends LightningElement {

    @api heading;
    @api isDisplay;
    @api title;
    @api name;
}