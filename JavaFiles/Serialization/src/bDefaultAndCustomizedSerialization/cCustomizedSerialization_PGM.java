package bDefaultAndCustomizedSerialization;

/*

Customized Serialization
===============================================


We can implement customized serialization by using the following two methods

1. private void writeobject(ObjectOutputStream os) throws Exception

        This method will be executed automatically at the time of serialization. Hence at the 
        time of serialization if we want to perform any activity we have to define that in 
        this method only.


2. private void readObject(ObjectInputStream is) throws Exception

     This method will be executed automatically at the time of deserialization. Hence at the 
     time of the deserialization if we want to perform any kind of activity we have to define 
     that in this method only.
     


note that the above methods are call back methods because these are executed automatically the JVM.


while performing which object serialization we have to do extra work in the corresponding
class we have to define above methods.

For example while performing account object serialization , if we require to do extra work
in the account class we have to define the above methods.



In the above program , before and after the serialization account object can provide 
proper username and the password.


note
------

Programmer cannot call private methods directly from outside of the class but 
JVM can call private methods directly from outside of the class.


*/





import java.io.*;

class Accounts implements Serializable
{
    
    String username="durga";
    transient String pwd="anushka";

    private void  writeObject(ObjectOutputStream os) throws Exception
                                /* This method is automatically
                                    called by the jvm whenever a call to the writeObject() method is made.
                                 */
    {
        os.defaultWriteObject(); /* This will lead to default serialization. This method is automatically
                                    called by the jvm whenever a call to the writeObject() method is made.
                                 */
        String epwd="123"+pwd; // We are created an encrypted password by adding 123 with the original pwd
        os.writeObject(epwd);// Now we are writing this encrypted password to the file.
    }
    
    private void readObject(ObjectInputStream is) throws Exception
    {
        is.defaultReadObject();//This will lead to default handling of the customized serialization.
        String epd=(String)is.readObject();// we are trying to read the content of ObjectInputStream
                                            //In the file we have kept our encrypted password which we are reading.
                                                
        pwd=epd.substring(3);/*In this line we are trying to decrypt the password by removing 123 from the string.
                               after decrypting we are setting the value of the instance variable pwd to the original password
                               value before encrypting the original message.
                             
                             */
        
        
    }
    
}

 class CustSerializeDemo1
{
    public static void main(String[] args) throws Exception
    {
        Accounts a1= new Accounts();
        
        System.out.println(a1.username+"...."+a1.pwd);
        
        FileOutputStream fos= new FileOutputStream("/home/vikas/Desktop/serialization/abc.txt");
        
        ObjectOutputStream oos= new ObjectOutputStream(fos);
        
        oos.writeObject(a1);// this willl call private void  writeObject(ObjectOutputStream os) throws Exception
                            // here os reference of ObjectOutputStream is same as oos and hence both of the 
                            //references are going to work on the same object.
        
       
                            
        FileInputStream fis= new FileInputStream("/home/vikas/Desktop/serialization/abc.txt");
                    /*
                    
                    This will internally call  private void readObject(ObjectInputStream is) throws Exception  
                    which is meant for the cusomized handling of the serialization.
            
                    */
                    
                    
        ObjectInputStream ois= new ObjectInputStream(fis);
        
        Accounts a2=(Accounts)ois.readObject(); // the kind of object kept inside file is of account type
                                              // and hence we need to typecast the type of object returned to Account type.
        System.out.println(a2.username+"...."+a2.pwd);
        
    }
}

/*
run:
durga....anushka
durga....anushka
BUILD SUCCESSFUL (total time: 0 seconds)

*/
