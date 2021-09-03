import { LightningElement, api, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
const FIELDS = [
    'Account.Id',
    'Account.Name',
    ];

export default class ChildRecord extends LightningElement {        
        @api objectName = 'Account';
        @api fieldName  = 'Name';
        @api iconname   = 'standard:record';
        @api label      = 'Account';
        @api parentidfield = 'AccountId';
        
        @wire(getRecord, { recordId: '0016F00002cy7eXQAQ', fields: FIELDS })
        selectedRecord;
}