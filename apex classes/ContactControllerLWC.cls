public with sharing class ContactControllerLWC {
    public ContactControllerLWC() {

    }

    @AuraEnabled (cacheable = true)
    public static List<Contact> getContactList(){
        return [SELECT Id, Name, Email, Phone, Fax, AccountId FROM Contact limit 10];
    }

    @AuraEnabled
    public static List<Account> accountList(){
        return [SELECT Id, Name, AccountNumber, Email__c, Phone FROM Account];
    }

    @AuraEnabled (cacheable = true)
    public static Contact getContactById(Id id){
        return [SELECT Id, Name, Email, Phone, Fax, AccountId FROM Contact where Id =: id];
    }
    
    @AuraEnabled
    public static List<Student__c> getFillterStudent(String name){
        if(String.isNotBlank(name)){
            name = '%'+name+'%';
            return [SELECT Id, Name, Last_Name__c, Email__c, Contact__c 
                FROM Student__c where Name like : name];
        } else {
            return [SELECT Id, Name, Last_Name__c, Email__c, Contact__c 
                FROM Student__c];
        }
    }

    @AuraEnabled
    public static Student__c save(Student__c student){
        insert student;
        return student;
    }
}
