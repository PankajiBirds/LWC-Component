public with sharing class ContactControllerLWC {
    public ContactControllerLWC() {

    }

    @AuraEnabled (cacheable = true)
    public static List<Contact> getContactList(){
        return [SELECT Id, Name, Email, Phone, Fax, AccountId FROM Contact];
    }

    @AuraEnabled
    public static List<Account> accountList(){
        return [SELECT Id, Name, AccountNumber, Email__c, Phone FROM Account];
    }
}
