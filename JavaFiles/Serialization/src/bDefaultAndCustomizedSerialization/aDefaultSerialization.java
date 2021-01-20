package bDefaultAndCustomizedSerialization;

/*

Default Serialization
=======================

During default serialization, there may be a chance of loss of information because
of the transient keyword.


In this example before serialization account object can provide proper user name and password.
But after the deserialization account can provide only user name , but not the password.
This is due to declaring password variable as the transient variable.

Hence during default serialization there may be a chance of loss of information because of
the transient keyword.

To recover this loss of information we should go for customized serialization


*/

import java.io.*;

class Account implements Serializable
{
    String username="durga";
    transient String pwd="anushka";
    
}

 class CustSerializeDemo
{
    public static void main(String[] args) throws Exception
    {
        Account a1= new Account();
        System.out.println(a1.username+"...."+a1.pwd);
        FileOutputStream fos= new FileOutputStream("/home/vikas/Desktop/serialization/abc.txt");
        ObjectOutputStream oos= new ObjectOutputStream(fos);
        oos.writeObject(a1);
        
        FileInputStream fis= new FileInputStream("/home/vikas/Desktop/serialization/abc.txt");
        ObjectInputStream ois= new ObjectInputStream(fis);
        Account a2= (Account)ois.readObject();
        System.out.println(a2.username+"...."+a2.pwd);
    }
}

/*
run:
durga....anushka
durga....null
BUILD SUCCESSFUL (total time: 0 seconds)

*/