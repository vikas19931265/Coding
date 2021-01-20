package Operators;

/*

Difference 2:

In the case of new operator based upon our requirement we can invoke
any constructor example  


        Test t = new Test();

        Test t1 = new Test1();

        Test t2= new Test2();


But newInstance() method internally calls no-argument constructor hence to 
use newInstance() method compulsory the corresponding class should contain 
no-argument constructor otherwise we will get run time exception saying
InstantiationException.

*/

import java.util.*;

class Testr1
{
 
    Testr1(int x)
    {
        //There is no default constructor in this class for newInstance() method to invoke
        // hence we will get instantiationException
    }
    
    public static void main(String[] args) throws Exception
    {
        
              
 while(true)
            
     {  
            System.out.println("Enter the class name");
        
         Scanner cn = new Scanner(System.in);
        
       try
       {
            String input=cn.nextLine();
        
            Object o= Class.forName(input).newInstance();
        
                    /*
            
                    Class.forName(input) used to load our input class.
            
                    */
            
            
            
            System.out.println("Object created for the class "+ o.getClass().getName());
    
            break;
                    
       
       }

          catch(ClassNotFoundException e)
       {
            System.out.println("Invalid class please enter valid class");
       
       }
    
    
    }
 
  }
    
}
    
    class Student1
{
    
}


class Employee1
{
    
}

/*
run:
Enter the class name
Testr1
Exception in thread "main" java.lang.InstantiationException: Testr1
	at java.lang.Class.newInstance(Class.java:427)
	at Testr1.main(NewClass40.java:46)
Caused by: java.lang.NoSuchMethodException: Testr1.<init>()
	at java.lang.Class.getConstructor0(Class.java:3082)
	at java.lang.Class.newInstance(Class.java:412)
	... 1 more
/home/vikas/.cache/netbeans/8.2/executor-snippets/run.xml:53: Java returned: 1
BUILD FAILED (total time: 4 seconds)

*/