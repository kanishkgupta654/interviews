public with sharing class getQuoteDetails {
    public getQuoteDetails() {

    }
    @AuraEnabled
    public static List<Quote__c> getQuote(String recID){
   
        List<Quote__c> quoteList = new List<Quote__c>();
        quoteList = [Select Id,Name,EndDate__c,Start_Date__c FROM Quote__c where Id =:recID
                            WITH SECURITY_ENFORCED];
        return quoteList;
    }
}