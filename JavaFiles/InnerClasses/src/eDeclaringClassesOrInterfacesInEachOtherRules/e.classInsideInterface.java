package eDeclaringClassesOrInterfacesInEachOtherRules;

/*

Case 5: class inside interface.

If functionality of a class is closely associated with an interface then it is highly recommended to 
declare the class inside the interface



In the below example email details is required , only for the email service and we are not using anywhere
else, hence EmailDetails class is required to be declared inside the EmailService interface.


*/


interface EmailService
{
    public void sendMail(EmailDetails e);
    
    class EmailDetails // We do this when mostly our method has argument or return type is class
    {
        String to_list;
        
        String cc_list;
        
        String subject;
        
        String body;
    }
}

