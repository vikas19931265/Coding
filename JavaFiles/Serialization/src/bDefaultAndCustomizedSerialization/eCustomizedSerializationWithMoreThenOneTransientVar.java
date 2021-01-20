/*

Customized Serialization with more then one transient variable
================================================================

*/


package bDefaultAndCustomizedSerialization;


import java.io.*;

 class Account2 implements Serializable
{
    
    String username="durga";
    transient String pwd="anushka";
    transient int pin=1234;

    private void  writeObject(ObjectOutputStream os) throws Exception
                                /* This method is automatically
                                    called by the jvm whenever a call to the writeObject() method is made.
                                 */
    {
        os.defaultWriteObject(); /* This will lead to default serialization. This method is automatically
                                    called by the jvm whenever a call to the writeObject() method is made.
                                 */
        String epwd="123"+pwd; // We are created an encrypted password by adding 123 with the original pwd
        int epin=4444+pin;
        os.writeObject(epwd);// Now we are writing this encrypted password to the file.
        os.writeInt(epin);
        
        
    }
    
    private void readObject(ObjectInputStream is) throws Exception
    {
        is.defaultReadObject();//This will lead to default handling of the customized serialization.
        String epwd=(String)is.readObject();// we are trying to read the content of ObjectInputStream
                                            //In the file we have kept our encrypted password which we are reading.
                                                
        pwd=epwd.substring(3);/*In this line we are trying to decrypt the password by removing 123 from the string.
                               after decrypting we are setting the value of the instance variable pwd to the original password
                               value before encrypting the original message.
                             
                             */
        
        int epin=is.readInt();
        pin=epin-4444;
    }
    
}

 class CustSerializeDemo2
{
    public static void main(String[] args) throws Exception
    {
        Account2 a1= new Account2();
        
        System.out.println(a1.username+"...."+a1.pwd+"...."+a1.pin);
        
        FileOutputStream fos= new FileOutputStream("abc.ser");
        
        ObjectOutputStream oos= new ObjectOutputStream(fos);
        
        oos.writeObject(a1);// this willl call private void  writeObject(ObjectOutputStream os) throws Exception
                            // here os reference of ObjectOutputStream is same as oos and hence both of the 
                            //references are going to work on the same object.
        
        FileInputStream fis= new FileInputStream("abc.ser");
                    /*
                    
                    This will internally call  private void readObject(ObjectInputStream is) throws Exception  
                    which is meant for the cusomized handling of the serialization.
            
                    */
                    
                    
        ObjectInputStream ois= new ObjectInputStream(fis);
        
        Account2 a2=(Account2)ois.readObject(); // the kind of object kept inside file is of account type
                                              // and hence we need to typecast the type of object returned to Account type.
        System.out.println(a2.username+"...."+a2.pwd+"...."+a2.pin);
        
    }
}

/*
$java -Xmx128M -Xms16M CustSerializeDemo1
durga....anushka
*/
