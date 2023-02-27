/*
 * Provus Services Quoting
 * Copyright (c) 2023 Provus Inc. All rights reserved.
 */

import { LightningElement, api,wire,track } from "lwc";
import getQuotedetails from '@salesforce/apex/getQuoteDetails.getQuote';

export default class EditQuote extends LightningElement {
  @api recordId;
  @track quotes =[];
  @track startDate ;
  @track endDate;

  renderedCallback() {}

 @wire(getQuotedetails, {recID : this.recordId})
    wiredContacts({data, error}){
        if(data){
            this.quotes = data;
            this.error = undefined;
        }
        else if (error) {
            this.error = error;
            this.quotes = undefined;
        }
    } 
/*  quoteData = {
    name: "Quote Name",
    endDate: 1547250828000
  }; */

  
}
